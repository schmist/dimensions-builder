import { Component, Input } from '@angular/core';
import {Level} from "../../data/levels";

@Component({
	selector: 'cmp-level-table',
	styleUrls: ['table.component.css'],
	templateUrl: 'level-table.component.html'
})
export class LevelTableComponent {
  @Input() levels: Level[];
	@Input() showFranchise: boolean;
}
