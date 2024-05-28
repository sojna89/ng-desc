import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Module1Component } from './module1.component';
import { Child1Component } from './child1/child1.component';

const routes: Routes = [
  {
    path: '',
    component: Module1Component,
    children: [
      { path: 'child1', component: Child1Component },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
