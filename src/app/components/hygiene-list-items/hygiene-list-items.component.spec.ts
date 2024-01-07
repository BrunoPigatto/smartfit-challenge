import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HygieneListItemsComponent } from './hygiene-list-items.component';

describe('HygieneListItemsComponent', () => {
  let component: HygieneListItemsComponent;
  let fixture: ComponentFixture<HygieneListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HygieneListItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HygieneListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
