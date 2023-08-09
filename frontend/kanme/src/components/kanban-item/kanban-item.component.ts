import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'kanban-item',
  templateUrl: './kanban-item.component.html',
  styleUrls: ['./kanban-item.component.scss']
})
export class KanbanItemComponent implements OnChanges , AfterViewInit{
  ngAfterViewInit(): void {
    if(this.shouldSetFocus){
      this.input.nativeElement.focus();

    }  
  }

  @ViewChild('itemdiv') input!: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    // if(this.shouldSetFocus){
    //   this.input.nativeElement.focus();

    // }

  }
  @Input()
  item!:string;
  @Input()
  editable:boolean=false;

  @Input()
  shouldSetFocus=false;

  @Output() itemValueChanged = new EventEmitter<string>();

  onFocusOutEvent(event:any){
    this.itemValueChanged.emit(event.target.innerText);
  }

  enterPressed(event:any){
    this.itemValueChanged.emit(event.target.innerText);
  }


}
