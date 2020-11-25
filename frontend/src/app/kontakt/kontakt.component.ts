import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpResponse, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  sendMail(name :string, email :string, text :string) {
    let mail = [{
      name, email, text
    }]
    this.http.post("http://94.130.150.189:4000/emails/sendMail", mail)
    console.log(mail)
  }


}
