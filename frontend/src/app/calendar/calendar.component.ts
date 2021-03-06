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
    dateClick: this.handleDateClick.bind(this)
  };

  ngOnInit(): void {
    this.calendarService.getEvents().subscribe(result => this.calendarOptions.events = result);
    
  }
  handleDateClick(arg) {
    console.log(this.calendarOptions.events)
    alert('date click! ' + arg.dateStr)
  }

}
