import { Component, Input, Output, OnInit, EventEmitter, AfterViewInit } from '@angular/core';
import * as Serializer from '../data/serializer';
import {FilterSkill} from "../data/data";
import {Abilities} from "../data/ability";
import {DataService} from "../data/data.service";
var document: Document;

class SkillList {
    list: FilterSkill[] = [];
    name: string;

    init(name: string, abilities: Abilities) {
        this.name = name;

        for (let ability of abilities.list) {
            /*if (ability.providers.length > 0)*/ {
                let filterSkill = new FilterSkill(ability);
                filterSkill.checked = false;
                this.list.push(filterSkill);
            }
        }

        this.orderByName();
    }

    set(skills: FilterSkill[]) {
        this.list = skills;
    }

    check(value: boolean) {
        for (let skill of this.list) {
            skill.checked = true;
        }
    }

    orderByProviders() {
        this.list.sort(function(a, b) {
            return a.providers.length - b.providers.length;
        });
    }

    orderByName() {
        this.list.sort(function(a, b) {
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        return this;
    }
}

export class AbilitySelection {
    abilities: FilterSkill[];
    urlParameter: string;
}

@Component({
	selector: 'ability-select',
	templateUrl: 'ability-select.component.html',
  styleUrls: ['ability-select.component.css']
})
export class AbilitySelectComponent implements OnInit, AfterViewInit {
    skillIds: number[] = [];
    skillLists: SkillList[] = [];
    skills: FilterSkill[] = [];

    selection: Abilities = new Abilities([]);

    @Output() changed: EventEmitter<AbilitySelection> = new EventEmitter<AbilitySelection>(true);
    urlParameter = "";

    _query: string;
    @Input() set query(value: string) {
        this._query = value;
        this._selectAbilities();
    }

    // hack to trigger update from the outside
    @Input() set skip(value: boolean) {
        if (value == true) {
            this._updateAllSkills();
            this.changed.emit({ abilities: this.skills, urlParameter: this.urlParameter });

            for (let listIndex = 0; listIndex < this.skillLists.length; listIndex++)
                this._updateRadios(listIndex);
        }
    }

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        let list = new SkillList();
        list.init("main story", this.dataService.getMainAbilities(null));
        list.check(true);
        this.skillLists.push(list);

        list = new SkillList();
        list.init("complete", this.dataService.getImportantAbilities(new Abilities(this._updateAllSkills())));
        list.check(true);
        this.skillLists.push(list);

        list = new SkillList();
        list.init("combos", this.dataService.getAbilityCombos(new Abilities(this._updateAllSkills())));
        list.check(true);
        this.skillLists.push(list);

        list = new SkillList();
        list.init("location access", this.dataService.getAbilityAccess(new Abilities(this._updateAllSkills())));
        list.check(true);
        this.skillLists.push(list);

        list = new SkillList();
        list.init("not needed / new & unconfirmed", this.dataService.getAbilities(new Abilities(this._updateAllSkills())));
        this.skillLists.push(list);

        this._selectAbilities();
    }

    ngAfterViewInit() {
        for (let listIndex = 0; listIndex < this.skillLists.length; listIndex++)
            this._updateRadios(listIndex);
    }

    onChanged(index: number) {
        this._updateAllSkills();
        this.changed.emit({ abilities: this.skills, urlParameter: this.urlParameter });

        this._updateRadios(index);
    }

    onGroupChanged(index: number, value: number, event) {
        let skills = this.skillLists[index];

        if (value == 0 || value == 1) {
            for (let skill of skills.list) {
                skill.checked = (value == 1);
            }
        }
        else {
            (<any>$('#abilityCollapse' + index)).collapse('show');
            event.stopPropagation();
        }

        this.onChanged(index);
    }

    private _updateRadios(index: number) {
        if (index >= this.skillLists.length || this.skillLists[index].list.length == 0) {
            console.error("_updateRadios");
            return;
        }

        let skills = this.skillLists[index];

        let checked = skills.list[0].checked;
        let allAreSame = true;
        for (let skill of skills.list) {
            allAreSame = allAreSame && (skill.checked == checked);
        }
        let value = (allAreSame ? (checked ? 1 : 0) : 2);

        let radio = (<any>$('#option' + value + '-' + index));
        radio.prop("checked", true);
        radio.parent().parent().children('.active').removeClass("active");
        radio.parent().addClass("active");
    }

    private _updateAllSkills() {
        if (this.skillLists.length == 0) {
            return [];
        }

        this.skills = [];
        this.selection = new Abilities([]);

        for (let list of this.skillLists) {
            this.skills = this.skills.concat(list.list);
        }
        for (let ability of this.skills) {
            if (ability.checked) {
                this.selection.add(ability);
            }
        }
        this.selection.orderByName();
        this.urlParameter = Serializer.abilitiesToString(this.selection);

        let list = new SkillList();
        list.set(this.skills);
        list.orderByProviders();
        this.skills = list.list;
        return this.skills;
    }

    private _selectAbilities() {
        if (this.skillLists.length == 0) {
            return;
        }

        this._updateAllSkills();
        if (this._query !== undefined && this._query.length > 0) {
            let query = Serializer.stringToAbilities(this._query);

            for (let ability of this.skills) {
                ability.checked = (-1 != query.indexOf(ability.id));
            }
            this.urlParameter = this._query;
            this._query = undefined;
        }
        this.changed.emit({ abilities: this.skills, urlParameter: this.urlParameter });

        for (let iter = 0; iter < this.skillLists.length; iter++) {
            this._updateRadios(iter);
        }
    }
}
