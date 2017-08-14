import { Component, Input } from '@angular/core';

@Component({
	selector: 'panel-button',
	templateUrl: 'panel-button.component.html',
  styleUrls: ['panel-button.component.css'],
})

export class PanelButtonComponent {
    @Input() title: string;
    @Input() desc: string;
    @Input() image: string;
}
