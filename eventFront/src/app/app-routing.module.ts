import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ListEventComponent } from './layout/list-event/list-event.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'events', component:ListEventComponent},
  {path:'', redirectTo:'events', pathMatch:'full'},
  //   children:[
  // {path:'test',component:HomeComponent}
  { path: 'tickets', loadChildren: () => import('./features/tickets/tickets.module').then(m => m.TicketsModule) },
  { path: 'events', loadChildren: () => import('./features/events/events.module').then(m => m.EventsModule) },
  { path: 'event-details', loadChildren: () => import('./features/events/event-details/event-details.module').then(m => m.EventDetailsModule) },
  { path: 'list-event', loadChildren: () => import('./features/events/list-event/list-event.module').then(m => m.ListEventModule) },
  // ]
  {path:'**', component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
