import { Component, Input } from '@angular/core';

@Component({
  selector: 'kanban-item',
  templateUrl: './kanban-item.component.html',
  styleUrls: ['./kanban-item.component.scss']
})
export class KanbanItemComponent {
  @Input()
  item!:string;
}
