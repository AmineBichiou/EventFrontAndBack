import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParticipationFormComponent } from './participation-form/participation-form.component';
import { EventCardComponent } from './components/event-card/event-card.component';


@NgModule({
  declarations: [
    EventsComponent,
    AddEventComponent,
    ParticipationFormComponent,
    EventCardComponent,
    
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [EventCardComponent]
})
export class EventsModule { }
