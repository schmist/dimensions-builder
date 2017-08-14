import {Component, Input, OnInit, Renderer} from '@angular/core';
import { MetaService, MetaModel } from '../meta';
import {DataService} from "../data/data.service";
import {LevelCollection, Levels} from "../data/levels";
import {Router} from "@angular/router";

@Component({
	templateUrl: 'level-list.component.html'
})
export class LevelListComponent implements OnInit {
    @Input() levels: Levels;
    @Input() collections: LevelCollection[];
    @Input() description: string;

    private meta;

    constructor(private data: DataService,
                renderer: Renderer, router: Router) {
      this.meta = new MetaService(renderer, router);
    }

    ngOnInit() {
        this.levels = this.data.getLevels();
        this.collections = this.levels.getCollections();

        this.description = `Find out the character abilities to complete a Lego Dimensions level or Adventure World.
            The list now includes all wave 6 (year 2) levels, story chapters and Adventure Worlds.
            Year 1 data is not complete yet, but will follow soon.`;

        this.meta.set(<MetaModel>{
            title: 'Abilities needed for Lego Dimensions levels and Adventure Worlds',
            description: this.description,
            image: '/assets/images/lego-dimensions-level-character-abilities.jpg'
        });
    }
}
