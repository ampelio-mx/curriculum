import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumComponenteComponent } from './curriculum-componente/curriculum-componente.component';

const routes: Routes = [
  {path:'curriculum-componente', component: CurriculumComponenteComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'curriculum-componente'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurriculumPrincipalRoutingModule { }
