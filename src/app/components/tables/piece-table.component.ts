import { Component, Input } from '@angular/core';
import {Piece} from "../../data/data";

@Component({
	selector: 'cmp-piece-table',
	styleUrls: ['table.component.css'],
	templateUrl: 'piece-table.component.html'
})
export class PieceTableComponent {
    @Input() pieces: Piece[];
}
