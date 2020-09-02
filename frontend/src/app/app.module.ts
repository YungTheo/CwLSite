import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import InteractionPlugin from '@fullcalendar/interaction'; // a plugin
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CalendarComponent } from './calendar/calendar.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ConfigService } from './config/config.service';
import { CalendarService } from './calendar/calender.service';
import { TeamComponent } from './team/team.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  InteractionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CalendarComponent,
    KontaktComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FullCalendarModule 
  ],
  providers: [
    CookieService,
    ConfigService,
    CalendarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
