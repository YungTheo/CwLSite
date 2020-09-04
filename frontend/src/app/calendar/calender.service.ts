
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpResponse, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

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
        private eventsUrl = 'api/events/';

        getEvents(): Observable<Event[]> {

            this.http.get(environment.myEndpoint + '/events/').subscribe((data) => {
            console.log(data)
            
    });
    return;
            
          }}