import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Start2Page } from './start2.page';

describe('Start2Page', () => {
  let component: Start2Page;
  let fixture: ComponentFixture<Start2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Start2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
