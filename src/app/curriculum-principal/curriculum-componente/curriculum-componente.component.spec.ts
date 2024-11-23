import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumComponenteComponent } from './curriculum-componente.component';

describe('CurriculumComponenteComponent', () => {
  let component: CurriculumComponenteComponent;
  let fixture: ComponentFixture<CurriculumComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurriculumComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculumComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
