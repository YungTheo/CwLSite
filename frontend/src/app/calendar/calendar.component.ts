import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { CalendarService } from './calender.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(private calendarService: CalendarService) {}
  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    height: '35rem',
    events: [
      { // this object will be "parsed" into an Event Object
        title: 'The Title', // a property!
        start: '2018-09-01', // a property!
        end: '2018-09-02' // a property! ** see important note below about 'end' **
      }
    ]
  };

  ngOnInit(): void {
    let events = this.calendarService.getEvents();
    console.log(events);
  }

}
