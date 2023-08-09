import { Component, Input } from '@angular/core';

@Component({
  selector: 'kanban-item-list',
  templateUrl: './kanban-item-list.component.html',
  styleUrls: ['./kanban-item-list.component.scss']
})
export class KanbanItemListComponent {
@Input({ required: true }) title! : string;
@Input({ required: false }) titleColor! : string;



}
