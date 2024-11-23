import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'curriculum-principal', loadChildren:()=> import('./curriculum-principal/curriculum-principal.module').then(m =>m.CurriculumPrincipalModule)},
  {path: '**', pathMatch: 'full', redirectTo: 'curriculum-principal'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
