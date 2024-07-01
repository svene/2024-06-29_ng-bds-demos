import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroyDemoComponent } from './destroy-demo.component';

describe('DestroyDemoComponent', () => {
  let component: DestroyDemoComponent;
  let fixture: ComponentFixture<DestroyDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestroyDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestroyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
