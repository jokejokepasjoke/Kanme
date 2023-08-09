import { Component } from '@angular/core';

@Component({
  selector: 'kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent {

  originalItemList:string[]= [...'12345'].map(x=>'item ' + x);


}
