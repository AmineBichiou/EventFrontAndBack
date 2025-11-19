import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { ListEventComponent } from './list-event/list-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ParticipationFormComponent } from './participation-form/participation-form.component';

const routes: Routes = [
  { path: '', component: EventsComponent },

  { path: 'list', component: ListEventComponent },
  { path: 'list/:id', component: EventDetailsComponent },
  { path: 'add', component: AddEventComponent },
  { path: 'participate/:id/:prix', component: ParticipationFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
