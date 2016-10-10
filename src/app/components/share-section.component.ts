import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, Event, NavigationEnd } from '@angular/router';
import { MetaService } from '../meta';
import { ButtonComponent, TweetComponent } from './basic';

@Component({
	moduleId: module.id,
	selector: 'share-section',
	templateUrl: './share-section.component.html',
	directives: [ButtonComponent, TweetComponent]
})
export class ShareSectionComponent implements OnInit, OnDestroy {
	private site = "http://dimensions-builder.com";
	private url: string;
	private sub: any;

	constructor(private meta: MetaService) {
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
