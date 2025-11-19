import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {
  eventForm!:FormGroup;
 constructor(private dataService: DataService) {
    this.eventForm = new FormGroup({
      titre: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[a-zA-Z ]*$') // lettres + espaces
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(30)
      ]),
      date: new FormControl('', Validators.required),
      lieu: new FormControl('', Validators.required),
      prix: new FormControl('', [
        Validators.required,
        Validators.pattern('^\\d+(\\.\\d+)?$') // chiffres + point
      ]),
      nbplaces: new FormControl('', [
        Validators.required,
        Validators.pattern('^[1-9][0-9]?$|^100$') // 1 à 100
      ]),
      organisateurId: new FormControl('', Validators.required),
      imageUrl: new FormControl(''),
         domains: new FormArray([
      new FormControl('', [Validators.required, Validators.minLength(3)])
    ])

    });
  }

  get f() {
    return this.eventForm.controls;
  }

  get titre() {
    return this.eventForm.get('titre');
  }

  get domains() {
    return this.eventForm.get('domains') as FormArray;
  }

addDomain() {
  this.domains.push(
    new FormControl('', [Validators.required, Validators.minLength(3)])
  );
}


  removeDomain(index: number) {
    this.domains.removeAt(index);
  }

onSubmit() {
  if (this.eventForm.invalid) {
    this.eventForm.markAllAsTouched();
    return;
  }
  console.log('✅ Événement ajouté :', this.eventForm.value);

  this.dataService.addEvent(this.eventForm.value).subscribe({
    next: (data) => {
      console.log('Événement enregistré avec succès :', data);
      this.eventForm.reset();
    },
    error: (err) => {
      console.error('Erreur lors de l\'ajout de l\'événement :', err);
    }
  });

  
}


}