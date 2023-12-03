import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdscreenComponent } from './thirdscreen.component';

describe('ThirdscreenComponent', () => {
  let component: ThirdscreenComponent;
  let fixture: ComponentFixture<ThirdscreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdscreenComponent]
    });
    fixture = TestBed.createComponent(ThirdscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
