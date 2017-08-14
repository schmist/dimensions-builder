import {Component, OnInit, ElementRef, Renderer2, Renderer} from '@angular/core';
import { MetaService, MetaModel } from '../meta';
import {Piece} from "../data/data";
import {DataService} from "../data/data.service";
import {Pieces} from "../data/piece";
import {Router} from "@angular/router";

@Component({
	selector: 'character-list',
	templateUrl: 'character-list.component.html'
})

export class CharacterListComponent implements OnInit {
    characters: Piece[];
    private scrollUp: any;

    private meta;

    constructor(private dataService: DataService,
                renderer: Renderer, router: Router) {
      this.meta = new MetaService(renderer, router);
    }

    ngOnInit() {
        this.meta.set(<MetaModel>{
            title: "Complete list of all characters",
            description: "Overview of all Lego Dimensions characters.",
            image: ''
        });
        this.characters = new Pieces(this.dataService.getAllMinifigs()).getOrdered().byName().list;
    }
}
