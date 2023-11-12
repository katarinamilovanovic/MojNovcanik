import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { UpdateItemPage } from './update-item.page';

describe('UpdateItemPage', () => {
  let component: UpdateItemPage;
  let fixture: ComponentFixture<UpdateItemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
