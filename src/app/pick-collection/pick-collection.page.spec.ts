import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PickCollectionPage } from './pick-collection.page';

describe('PickCollectionPage', () => {
  let component: PickCollectionPage;
  let fixture: ComponentFixture<PickCollectionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PickCollectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
