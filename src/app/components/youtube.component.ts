import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
/*
@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(sanitizer: DomSanitizationService) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} */

@Component({
	selector: 'cmp-youtube',
	templateUrl: 'youtube.component.html'
})
export class YoutubeComponent {
    @Input() set url(value: string) {
        this._value = value;
        this._updateUrl();
    }
    private _value: string;
    @Input() _url: SafeResourceUrl | string; // FIXME: STRING ADDED TO REMOVE WARNING

    @Input() set autoloop(value: boolean) {
        this._autoloop = value;
        this._updateUrl();
    }
    private _autoloop: boolean = false;

    constructor(private sanitizer: DomSanitizer) {
    }

    private _updateUrl() {
        let autoloop = this._autoloop ? ('?controls=0&amp;rel=0&amp;fs=0&amp;showinfo=0') : '';
        this._url = this.sanitizer.bypassSecurityTrustResourceUrl('https://youtube.com/embed/' + this._value + autoloop);
    }
}
