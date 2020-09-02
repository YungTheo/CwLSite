import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { CalendarComponent } from './calendar/calendar.component';
import { BlogComponent } from './blog/blog.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'team', component: TeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
