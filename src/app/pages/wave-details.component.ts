import {Component, Input, OnInit, Renderer} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { MetaService, MetaModel } from '../meta';
import {Wave} from "../data/wave";
import {Piece} from "../data/data";
import {DataService} from "../data/data.service";

@Component({
	selector: 'page-wave-details',
	templateUrl: 'wave-details.component.html',
})
export class WaveDetailsComponent implements OnInit {
	private sub: any;
  @Input() wave: Wave;
  @Input() description: string;
  @Input() characters: Piece[] = [];
  @Input() builds: Piece[] = [];

  private meta;

	constructor(private route: ActivatedRoute,
				private data: DataService,
              renderer: Renderer, router: Router) {
    this.meta = new MetaService(renderer, router);
	}

	ngOnInit() {
		this.meta.set(<MetaModel>{
			title: 'List of all Lego Dimensions packs'
		});

		this.sub = this.route.params.subscribe(params => {
			let id = +params['id'];
			this.wave = this.data.getWave(id);

			let numCharacters = 0;
			let numBuilds = 0;
			for (let pack of this.wave.packs) {
				let characters = this.data.getMinifigs(pack.minifigs);
				let builds = this.data.getBuilds(pack.builds);
				numCharacters += characters.length;
				numBuilds += pack.builds.length;

				this.characters = this.characters.concat(characters);
				this.builds = this.builds.concat(builds);
			}

			let desc = "Wave " + this.wave.number + " contains " + this.wave.packs.length + " packs, " + numCharacters + " characters and " + numBuilds + " builds.";
			if (this.wave.released) {
				desc += " Wave " + this.wave.number + " was released in " + this.wave.release + " as part of the year " +
					this.wave.year + " waves.";
			} else {
				desc += " Wave " + this.wave.number + " will be released in " + this.wave.release + " as part of the year " +
					this.wave.year + " waves.";
			}
			this.description = desc;

			this.meta.set(<MetaModel>{
				title: "All packs in wave " + this.wave.number,
				description: desc,
				image: '/assets/images/' + this.wave.image + '.jpg'
			});
		});
	}
}
