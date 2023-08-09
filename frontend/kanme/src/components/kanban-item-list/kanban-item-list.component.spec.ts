import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanItemListComponent } from './kanban-item-list.component';

describe('KanbanItemListComponent', () => {
  let component: KanbanItemListComponent;
  let fixture: ComponentFixture<KanbanItemListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KanbanItemListComponent]
    });
    fixture = TestBed.createComponent(KanbanItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
