import {Component, Input, OnInit, Renderer} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { MetaService, MetaModel } from '../meta';
import * as Serializer from './../data/serializer';
import {Abilities} from "../data/ability";
import {Level} from "../data/levels";
import {Piece} from "../data/data";
import {DataService} from "../data/data.service";


@Component({
	templateUrl: 'level-details.component.html'
})
export class LevelDetailsComponent implements OnInit {
    sub: any;
    level: Level;
    minikitAbilities: Abilities;
    rescueAbilities: Abilities;
    extraAbilities: Abilities;
    storyAbilities: Abilities;

    allAbilities: Abilities;

    serialized: string;
    @Input() levelAccess: string;
    @Input() charactersWithAccess: Piece[];
    @Input() characterWithAccess: Piece;

    private meta;

    constructor(private route: ActivatedRoute,
                private data: DataService,
                renderer: Renderer, router: Router) {
      this.meta = new MetaService(renderer, router);
    }

    ngOnInit() {
        this.meta.set(<MetaModel>{
            title: 'Level Details'
        });
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            this.level = this.data.getLevel(id);
            if (this.level !== undefined) {
                this._initLevel();
            }
        });
    }

    private _initLevel() {
        this.meta.set(<MetaModel>{
            title: this.level.name + ' - ' + this.level.franchiseName,
            description: this.level.desc,
            image: '/assets/images/levels/' + this.level.image + '.jpg'
        });

        this.minikitAbilities = new Abilities(this.data.getSkills(this.level.abilitiesMinikits)).orderByName();
        this.rescueAbilities = new Abilities(this.data.getSkills(this.level.abilitiesRescue)).orderByName();
        this.extraAbilities = new Abilities(this.data.getSkills(this.level.abilitiesExtra)).orderByName();
        this.storyAbilities = new Abilities(this.data.getSkills(this.level.abilitiesStory)).orderByName();

        this.allAbilities = this.minikitAbilities.clone();
        this.allAbilities.addRange(this.rescueAbilities);
        //this.allAbilities.addRange(this.extraAbilities);
        //this.extraAbilities = this.allAbilities.clone();

        let allAbilities = this.allAbilities.clone();
        allAbilities.addRange(this.storyAbilities);
        allAbilities.orderByName();

        this.serialized = Serializer.abilitiesToString(allAbilities);

        let level = this.data.getAbility(this.level.access);
        if (level !== undefined) {
            this.levelAccess = level.name;
            this.charactersWithAccess = level.providers;
            if (this.charactersWithAccess.length === 1) {
                this.characterWithAccess = this.charactersWithAccess[0];
            }
        }
    }
}
