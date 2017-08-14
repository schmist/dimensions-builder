import {Component, OnInit, OnDestroy, Input, Renderer2, Renderer} from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { MetaService } from '../meta';
//var document: Document;

@Component({
	selector: 'comment-section',
	templateUrl: './comment-section.component.html'
})
export class CommentSectionComponent implements OnInit, OnDestroy {
	@Input() url: string;
	private sub: any;
	loadAPI: Promise<any>;

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
			this.url = this.meta._url;
		}
		this.loadAPI = new Promise((resolve) => {
            this.loadScript();
        });

	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	public loadScript() {
		if (!document) {
			return;
		}
		let el = document.getElementById('disqus_script');
		/*if (el !== null) {
			console.log('preparing to reset...')
			DISQUS.reset({
				reload: true,
				config: function () {
					this.page.identifier = this.url;
				}
			});
		}
		else*/
		{
			let node = document.createElement('script');
			node.id = 'disqus_script';
			node.src = 'http://dimensions-builder.disqus.com/embed.js';
			node.type = 'text/javascript';
			node.async = true;
			node.charset = 'utf-8';
			document.getElementsByTagName('head')[0].appendChild(node);
		}
    }
}
