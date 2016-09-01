import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Skill, Vehicle, Piece, Pieces, AbilitiesOrdered, DataService } from './../data/index';
import { MinifigPanelComponent } from './../components/index';

@Component({
	moduleId: module.id,
	selector: 'ability-list',
	templateUrl: 'ability-details.component.html',
    directives: [ROUTER_DIRECTIVES, MinifigPanelComponent]
})
export class AbilityDetailsComponent implements OnInit {
    sub: any;
    ability: Skill;
    builds: Piece[] = [];
    characters: Piece[] = [];

    constructor(private route: ActivatedRoute,
                private data: DataService,
                private title: Title ) {
    }

    ngOnInit() {
        this.title.setTitle("Ability Details - Lego Dimensions Builder")
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            this.ability = this.data.getAbilityByUrl(id);

            if (this.ability != undefined) {
                this.builds = new Pieces(this.ability.providers).getBuilds();
                this.characters = new Pieces(this.ability.providers).getCharacters();

                this.title.setTitle(this.ability.name + ' Ability - details, character list');
            }
        });
    }
}
