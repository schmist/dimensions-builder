import {Component, Input, OnInit, Renderer, Renderer2} from '@angular/core';
import { MetaService, MetaModel } from '../meta';
import { Router } from '@angular/router';
import {Piece} from "../data/data";
import {DataService} from "../data/data.service";
import {Pieces} from "../data/piece";

@Component({
	selector: 'home-cmp',
	templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
	@Input() mostSkills: Piece[];

	private meta;

	constructor(private dataService: DataService,
              renderer: Renderer, router: Router) {
    this.meta = new MetaService(renderer, router);
	}

	ngOnInit() {
		this.meta.set(<MetaModel>{
			title: null,
			description: 'All about Lego Dimensions Abilities, Characters, Vehicles, Levels. Find out which abilities you need to 100% complete a level and more.',
			image: ''
		});

		let mostSkills: Piece[] = [];
		for (let minifig of this.dataService.getAllMinifigs()) {
			if (minifig.skills.length > 7) {
				mostSkills.push(minifig);
			}
		}
		this.mostSkills = new Pieces(mostSkills).getOrdered().byName().list;
	}
}
