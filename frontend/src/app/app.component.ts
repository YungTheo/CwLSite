import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CalendarService } from './calendar/calender.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Cowboys with Lamas - Die Clanpage';
  private cookieValue: string;

  constructor(private cookieService: CookieService, private calendarService: CalendarService) {}


  ngOnInit(): void {
    if(this.cookieService.get('cwl-cookie'))
    {
      document.getElementById('cookies_wrapper').style.display = "none";
    }
  
  }

  onClick(event: Event) {
    this.cookieService.set('cwl-cookie', 'strenggeheimerinhalt');
    document.getElementById('cookies_wrapper').style.display = "none";
  } 
  
}
