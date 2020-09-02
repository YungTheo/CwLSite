import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



export interface Event {
    players: Array<Players>,
    createdDate: Date,
    eventStart: Date,
    eventEnd: Date,
    eventType: string,
    eventDescription: string,
    eventName: string
  }

  export interface Players {
    username: string
  }

  

    @Injectable()
    export class CalendarService {
        configUrl = 'assets/config.json';
    
        constructor(private http: HttpClient) { }
        private eventsUrl = 'events/';

        getEvents(): Observable<Event[]> {
            this.http.get('http://94.130.150.189:4000/events').subscribe((data) => {
            console.log(data);
            return data;  
            
    });
            
          }}