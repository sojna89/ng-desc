import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { Module1Component } from './module1.component';
import { Child1Component } from './child1/child1.component';
import { LinkComponent } from '../components/link/link.component';


@NgModule({
  declarations: [
    Module1Component,
    Child1Component,
    LinkComponent
  ],
  imports: [
    CommonModule,
    Module1RoutingModule
  ]
})
export class Module1Module { }
