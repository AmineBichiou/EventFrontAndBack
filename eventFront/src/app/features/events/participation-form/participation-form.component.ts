// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Participation } from '../../../shared/models/participation.model';

// @Component({
//   selector: 'app-participation-form',
//   templateUrl: './participation-form.component.html',
//   styleUrls: ['./participation-form.component.css']
// })
// export class ParticipationFormComponent implements OnInit {
  
//   eventId: number = 0;
//   eventPrice: number = 0;
  
//   participation: Participation = new Participation(
//     0,
//     0,
//     '',
//     1,
//     'pending'
//   );

//   participations: Participation[] = [];
//   showTotalPrice: boolean = false;

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
// this.route.snapshot.paramMap.get('id');
//     this.eventId = Number(this.route.snapshot.paramMap.get('id'));
//     this.eventPrice = Number(this.route.snapshot.paramMap.get('prix'));
//   }

//   onSubmit(form: any): void {
//     if (form.valid) {
//       const newParticipation = new Participation(
//         this.participation.userId,
//         this.eventId,
//         this.participation.emailParticipant,
//         this.participation.nbPlaces,
//         this.participation.status
//       );
//       newParticipation.id = this.participations.length + 1;
      
//       this.participations.push(newParticipation);
      
//       console.log('Participation ajoutée:', newParticipation);
//       console.log('Liste des participations:', this.participations);
      
//       alert('Participation enregistrée avec succès!');
//       this.router.navigate(['/events']);
//     }
//   }

//   calculateTotal(): number {
//     return this.participation.nbPlaces * this.eventPrice;
//   }

//   onNbPlacesBlur(): void {
//     if (this.participation.nbPlaces > 0) {
//       this.showTotalPrice = true;
//     } else {
//       this.showTotalPrice = false;
//     }
//   }

//   cancel(): void {
//     this.router.navigate(['/events']);
//   }
// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Participation } from '../../../shared/models/participation.model';
import { ParticipationService } from '../../../shared/services/participation.service';

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
    private router: Router,
    private participationService: ParticipationService
  ) {}

  ngOnInit(): void {
    this.eventId = Number(this.route.snapshot.paramMap.get('id'));
    this.eventPrice = Number(this.route.snapshot.paramMap.get('prix'));

    this.loadParticipations();
  }

  loadParticipations(): void {
    this.participationService.getParticipations().subscribe({
      next: (data) => this.participations = data,
      error: (err) => console.error('Erreur de chargement:', err)
    });
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

      this.participationService.addParticipation(newParticipation)
        .subscribe({
          next: (saved) => {
            alert("Participation enregistrée !");
            this.loadParticipations();
            this.router.navigate(['/events']);
          },
          error: (err) => {
            console.error(err);
            alert("Erreur lors de l'enregistrement");
          }
        });
    }
  }

  calculateTotal(): number {
    return this.participation.nbPlaces * this.eventPrice;
  }

  onNbPlacesBlur(): void {
    this.showTotalPrice = this.participation.nbPlaces > 0;
  }

  deleteParticipation(id: number): void {
    if (confirm("Voulez-vous supprimer cette participation ?")) {
      this.participationService.deleteParticipation(id).subscribe({
        next: () => {
          alert("Participation supprimée !");
          this.loadParticipations();
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }
}
