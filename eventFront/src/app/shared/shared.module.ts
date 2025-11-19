import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';
import { EventCardComponent } from '../features/events/components/event-card/event-card.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EventCardComponent
  ],
  imports: [
    CommonModule,
    DataService
  ],
  exports: [
    EventCardComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
