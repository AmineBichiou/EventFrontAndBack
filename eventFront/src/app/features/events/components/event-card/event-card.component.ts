import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AppEvent } from '../../../../shared/services/data.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {

  @Input() event!: AppEvent;

  @Output() like = new EventEmitter<AppEvent>();
  @Output() ticket = new EventEmitter<AppEvent>();

  constructor(private router: Router) {}

  onLike() {
    this.like.emit(this.event);
  }

  onTicket() {
    this.ticket.emit(this.event);
  }

  onParticipate() {
    this.router.navigate(['/events/participate', this.event.id, this.event.prix]);
  }
}