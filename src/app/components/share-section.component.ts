import {Component, OnInit, OnDestroy, Input, Renderer2, Renderer} from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { MetaService } from '../meta';

@Component({
	selector: 'share-section',
	templateUrl: './share-section.component.html',
	styles: [`share-button {
		float: left;
	}
    @media (max-width: 767px) {
        share-button {
            width: 50%;
			border-top: 1px solid #16203B;
        }
    }
    @media (min-width: 768px) {
        share-button {
            width: 25%;
        }
    }
	`]
})
export class ShareSectionComponent implements OnInit, OnDestroy {
	@Input() url: string;
	private sub: any;

	private meta;

	constructor(renderer: Renderer, router: Router) {
	  this.meta = new MetaService(renderer, router);
	}

	ngOnInit() {
        this.sub = this.meta.url.subscribe(
            (url: string) => {
				this.url = url;
            });
		if (this.meta._url !== undefined) {
			this.url = this.meta._safeurl;
		}
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
