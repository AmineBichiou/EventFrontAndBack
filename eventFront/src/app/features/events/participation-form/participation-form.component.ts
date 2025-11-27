import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Participation } from '../../../shared/models/participation.model';

@Component({
  selector: 'app-participation-form',
  templateUrl: './participation-form.component.html',
  styleUrls: ['./participation-form.component.css']
})
export class ParticipationFormComponent implements OnInit {
  
  eventId: number = 0;
  eventPrice: number = 0;
  
  participation: Participation = new Participation(
    0,
    0,
    '',
    1,
    'pending'
  );

  participations: Participation[] = [];
  showTotalPrice: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
this.route.snapshot.paramMap.get('id');
    this.eventId = Number(this.route.snapshot.paramMap.get('id'));
    this.eventPrice = Number(this.route.snapshot.paramMap.get('prix'));
  }

  onSubmit(form: any): void {
    if (form.valid) {
      const newParticipation = new Participation(
        this.participation.userId,
        this.eventId,
        this.participation.emailParticipant,
        this.participation.nbPlaces,
        this.participation.status
      );
      newParticipation.id = this.participations.length + 1;
      
      this.participations.push(newParticipation);
      
      console.log('Participation ajoutée:', newParticipation);
      console.log('Liste des participations:', this.participations);
      
      alert('Participation enregistrée avec succès!');
      this.router.navigate(['/events']);
    }
  }

  calculateTotal(): number {
    return this.participation.nbPlaces * this.eventPrice;
  }

  onNbPlacesBlur(): void {
    if (this.participation.nbPlaces > 0) {
      this.showTotalPrice = true;
    } else {
      this.showTotalPrice = false;
    }
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }
}