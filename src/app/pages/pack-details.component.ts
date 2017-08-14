import {Component, OnInit, OnDestroy, Input, Renderer} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { MetaService, MetaModel } from '../meta';
import {DataService} from "../data/data.service";
import {Pieces} from "../data/piece";
import {Abilities} from "../data/ability";
import {Pack, packTypeStrings} from "../data/data";

@Component({
	selector: 'pack-details',
  styleUrls: ['pack-details.component.css'],
	templateUrl: 'pack-details.component.html'
})
export class PackDetailsComponent implements OnInit, OnDestroy {
    sub: any;
    @Input() pack: Pack;
    private characters: Pieces;
    @Input() builds: Pieces;
    @Input() pieces: Pieces;
    @Input() skills: Abilities;
    @Input() buildAbilities: Abilities;
    @Input() type: string;
    @Input() mustHave: boolean = false;
    @Input() mustHaveText: string;
    @Input() description: string;

    private meta;

    constructor(private route: ActivatedRoute,
                private dataService: DataService,
                renderer: Renderer, router: Router) {
      this.meta = new MetaService(renderer, router);
    }

    ngOnInit() {
        this.meta.set(<MetaModel>{
            title: "Pack Details"
        });

        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.pack = this.dataService.getPack(id);
            this.characters = new Pieces(this.dataService.getMinifigs(this.pack.minifigs));
            this.builds = new Pieces(this.dataService.getBuilds(this.pack.builds));
            this.pieces = this.characters.clone()
            this.pieces.addRange(this.builds);

            this.skills = this.characters.getAbilities().orderByName();
            this.buildAbilities = this.builds.getAbilities().orderByName();

            this.meta.set(<MetaModel>{
                title: this.pack.name + " " + packTypeStrings[this.pack.type],
                description: "See all characters, builds and abilities included in the " + this.pack.name + " " + packTypeStrings[this.pack.type] + ".",
                image: '/assets/images/' + this.pack.image + '.jpg'
            });
            this.type = packTypeStrings[this.pack.type];

            this.mustHaveText = null;
            for (let ability of this.skills.list) {
                if (ability.unimportant) {
                    continue;
                }
                let thisPack = false;
                for (let provider of ability.providers) {
                    thisPack = provider.packId == this.pack.id;
                    if (!thisPack) {
                        break;
                    }
                }
                if (thisPack) {
                    this.mustHave = true;
                    if (this.mustHaveText === null) {
                        this.mustHaveText = ability.name;
                    } else {
                        this.mustHaveText += ", " + ability.name;
                    }
                }
            }

            this.description = "";
            if (!this.pack.released) {
                this.description += "This pack has not been released yet. The content is work-in-progress.";
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
