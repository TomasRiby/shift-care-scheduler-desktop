import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarNavigationComponent } from './top-bar-navigation.component';

describe('TopBarNavegationComponent', () => {
  let component: TopBarNavigationComponent;
  let fixture: ComponentFixture<TopBarNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBarNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopBarNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
