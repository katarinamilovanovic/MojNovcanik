import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNewItem2Page } from './add-new-item2.page';

describe('AddNewItem2Page', () => {
  let component: AddNewItem2Page;
  let fixture: ComponentFixture<AddNewItem2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddNewItem2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
