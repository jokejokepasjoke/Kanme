import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'kanban-item-list',
  templateUrl: './kanban-item-list.component.html',
  styleUrls: ['./kanban-item-list.component.scss']
})
export class KanbanItemListComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: false }) titleColor!: string;
  @Input() itemList!: string[]


  constructor() {
    if (!this.itemList) {
      this.itemList = [];
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    console.log(event);

  }
  
}
