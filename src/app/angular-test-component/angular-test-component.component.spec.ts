import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTestComponentComponent } from './angular-test-component.component';

describe('AngularTestComponentComponent', () => {
  let component: AngularTestComponentComponent;
  let fixture: ComponentFixture<AngularTestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularTestComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
