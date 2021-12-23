import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { ListComponent } from './list/list.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    TableModule,
    ButtonModule,
    ToastModule
  ]
})
export class TablesModule { }
