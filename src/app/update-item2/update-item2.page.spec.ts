import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateItem2Page } from './update-item2.page';

describe('UpdateItem2Page', () => {
  let component: UpdateItem2Page;
  let fixture: ComponentFixture<UpdateItem2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateItem2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
