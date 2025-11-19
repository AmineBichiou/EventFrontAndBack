import { Component } from '@angular/core';
import { Event } from '../../models/event';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent {

  EVENTS: Event[] = [
  {
    id: 1,
    titre: "Concert Jazz",
    description: "Un concert exceptionnel avec des artistes internationaux.",
    date: new Date("2025-10-15T20:00:00"),
    lieu: "Théâtre Municipal",
    prix: 50,
    organisateurId: 101,
    imageUrl: "/images/event.png",
    nbplaces: 200,
    nbrlikes: 35
  },
  {
    id: 2,
    titre: "Conférence Tech IA",
    description: "Discussion autour des dernières tendances en intelligence artificielle.",
    date: new Date("2025-09-02T09:00:00"),
    lieu: "Centre de Congrès",
    prix: 0, // gratuit
    organisateurId: 102,
    imageUrl: "/images/event.png",
    nbplaces: 500,
    nbrlikes: 120
  },
  {
    id: 3,
    titre: "Atelier Cuisine",
    description: "Apprenez à préparer des plats traditionnels tunisiens.",
    date: new Date("2025-12-05T14:30:00"),
    lieu: "Espace Culturel",
    prix: 25,
    organisateurId: 103,
    imageUrl: "/images/event.png",
    nbplaces: 30,
    nbrlikes: 48
  },
  {
    id: 4,
    titre: "Marathon Carthage",
    description: "Une course sportive à travers les sites historiques.",
    date: new Date("2026-01-20T07:00:00"),
    lieu: "Carthage",
    prix: 10,
    organisateurId: 104,
    imageUrl: "/images/event.png",
    nbplaces: 1000,
    nbrlikes: 300
  }
];

// filteredEvents: Event[] = [...this.EVENTS];
searchItem:string='';

likeEvent(event: Event) {
  return event.nbrlikes += 1;
  
}
TicketEvent(event : Event)
{
   event.nbplaces -=1

}
IsExpired ( event : Event){
  return new Date(event.date) < new Date()
}
//  filterEvents(event: any) {
//     const query = event.target.value.toLowerCase();
//     this.filteredEvents = this.EVENTS.filter(e =>
//       e.titre.toLowerCase().includes(query) ||
//       e.description.toLowerCase().includes(query) ||
//       e.lieu.toLowerCase().includes(query)
//     );
//   }
filter(){
  return this.EVENTS.filter((e) => e.titre.toLowerCase().includes(this.searchItem.toLowerCase()));
}


}
