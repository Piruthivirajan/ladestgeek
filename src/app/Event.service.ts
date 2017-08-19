import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map' ;

@Injectable()
export class EventService {
constructor( private http:Http) { }

getDetails(){
   return this.http.get("http://localhost:8090/events")
        .map(res => res.json());
}
  addEvent(info){
    return this.http.post("http://localhost:8090/events",info).map(res => res.json());
  }
   removePart(info){
    return this.http.delete("http://localhost:8080/events/"+info).map(res => res.json());
  }

}