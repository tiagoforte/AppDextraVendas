import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancheFormComponent } from './lanche-form.component';

describe('LancheFormComponent', () => {
  let component: LancheFormComponent;
  let fixture: ComponentFixture<LancheFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancheFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancheFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
