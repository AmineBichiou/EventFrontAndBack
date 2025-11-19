import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListEventRoutingModule } from './list-event-routing.module';
import { ListEventComponent } from './list-event.component';
import { FormsModule } from '@angular/forms';
import { EventCardComponent } from '../components/event-card/event-card.component';
import { EventsModule } from '../events.module';


@NgModule({
  declarations: [
    ListEventComponent,
  ],
  imports: [
    CommonModule,
    ListEventRoutingModule,
    FormsModule,
    EventsModule
  ]
})
export class ListEventModule { }
