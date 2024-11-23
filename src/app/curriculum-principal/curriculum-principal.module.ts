import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculumPrincipalRoutingModule } from './curriculum-principal-routing.module';
import { CurriculumComponenteComponent } from './curriculum-componente/curriculum-componente.component';


@NgModule({
  declarations: [
    CurriculumComponenteComponent
  ],
  imports: [
    CommonModule,
    CurriculumPrincipalRoutingModule
  ]
})
export class CurriculumPrincipalModule { }
