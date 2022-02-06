import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsgroupComponent } from './formsgroup/formsgroup.component';
import { InteractComponent } from './interact/interact.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: 'template',component : TemplateDrivenComponent},
  {path: 'reactive',component : ReactiveComponent},
  {path: 'formsgroup', component: FormsgroupComponent},
  {path:'interact', component: InteractComponent},
  {path : 'test', component:TestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
