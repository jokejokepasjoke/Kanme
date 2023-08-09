import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../../components/app/app.component';
import { KanbanItemComponent } from '../../components/kanban-item/kanban-item.component';
import { KanbanBoardComponent } from 'src/components/kanban-board/kanban-board.component';
import { KanbanItemListComponent } from 'src/components/kanban-item-list/kanban-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    KanbanItemComponent,
    KanbanBoardComponent,
    KanbanItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
