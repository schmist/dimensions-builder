import {Component, OnInit, OnDestroy, Input, Renderer2, Renderer} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { MetaService, MetaModel } from '../meta';
import {Pack, Piece} from "../data/data";
import {Abilities} from "../data/ability";
import {DataService} from "../data/data.service";
import {PieceState} from "../data/data-types";

@Component({
	selector: 'page-character-details',
	templateUrl: 'character-details.component.html'
})
export class CharacterDetailsComponent implements OnInit, OnDestroy {
    sub: any;
    pack: Pack;
    @Input() character: Piece;
    @Input() mustHave: boolean = false;
    @Input() description: string;
    @Input() workInProgress: string;
    @Input() groupedAbilities: Abilities[];

    private meta;

    constructor(private route: ActivatedRoute,
                private dataService: DataService,
                renderer: Renderer, router: Router) {
      this.meta = new MetaService(renderer, router);

    }

    ngOnInit() {
        this.meta.set(<MetaModel>{
            title: "Character Details",
            description: "",
            image: ''
        });

        this.sub = this.route.params.subscribe(params => {
            this.character = this.dataService.getCharacterByUrl(params['id']);
            if (this.character === undefined) {
                // fall back to numerical id
                this.character = this.dataService.getMinifig(+params['id']);
            }

            if (this.character !== undefined) {
                this.pack = this.dataService.getPack(this.character.packId);
                for (let ability of this.character.skills) {
                    if (ability.isUnique()) {
                        this.mustHave = true;
                        break;
                    }
                }
                let desc = this.character.name + " has " + this.character.skills.length + " abilities.";
                if (this.mustHave) {
                    desc += " At least one of then is a unique ability. You need " + this.character.name + " to unlock everything in Lego Dimensions.";
                }
                if (this.character.state === PieceState.Incomplete) {
                    this.workInProgress = "The ability data for this character are still work-in-progress and not confirmed yet.";
                } else if (this.character.state === PieceState.New) {
                    this.workInProgress = "The abilities for this character were recently added. There may be some changes.";
                }
                this.description = desc;

                this.meta.set(<MetaModel>{
                    title: this.character.name + "'s abilities and more",
                    description: desc,
                    image: '/assets/images/' + this.character.image + '.png',
                    canonical: this.character.url ? ('/character/' + this.character.url) : undefined
                });

                this.groupedAbilities = this.character.getGroupedAbilities();
            }
        });
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
