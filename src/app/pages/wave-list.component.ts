import {Component, Pipe, Injectable, PipeTransform, OnInit, Input, Renderer} from '@angular/core';
import { Router } from '@angular/router';
import { MetaService, MetaModel } from '../meta';
import {Wave} from "../data/wave";
import {DataService} from "../data/data.service";

@Component({
	selector: 'page-wave-list',
	templateUrl: 'wave-list.component.html',
})
export class WaveListComponent implements OnInit {
  @Input() waves: Wave[] = [];
  @Input() description: string;

  private meta;

	constructor(private dataService: DataService,
              renderer: Renderer, router: Router) {
    this.meta = new MetaService(renderer, router);
	}

	ngOnInit() {
		this.waves = this.dataService.getWaves();

		let releasedWaves = 0;
		let releasedPacks = 0;
		for (let wave of this.waves) {
			if (wave.released) {
				releasedPacks += wave.packs.length;
				releasedWaves ++;
			}
		}

		let desc = "There are currently " + releasedPacks + " packs released in " + releasedWaves + " waves.";
		this.description = desc;

		this.meta.set(<MetaModel>{
			title: "Complete list of all Lego Dimensions packs",
			description: desc
		});
	}
}
