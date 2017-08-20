import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Event}  from './Event';
import { EventService} from './Event.service';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [EventService]
})
export class RegisterComponent {
 model = new Event();
 register:Event;

  other:boolean=false;
  newclg:string="";
  junkc:boolean=false;
 trixc:boolean=false;
 facec:boolean=false;
 geekadzc:boolean=false;
 zorroc:boolean=false;
 quizc:boolean=false;
 meshc:boolean=false;
 tangoc:boolean=false;
 //junk
 junkpname1:string="";
 junkdept1:string="";
 junkcontact1:number;
 junkemail1:string="";

 junkpname2:string="";
 junkdept2:string="";
 junkcontact2:number;
 junkemail2:string="";

    constructor(public eventservice:EventService) {
      
    }
    ngOnInit() {

    }


  addEvent(){
          this.eventservice.addEvent(this.model)
          .subscribe(Event =>{
          
          });         
   return true;
  }
  check(){
   
                    if(this.junkc){
                    var junkevent = new Event();
                    junkevent.event="geekjunk"
                     junkevent.clgname=this.newclg;
                    junkevent.pname1=this.junkpname1;
                    junkevent.contact1=this.junkcontact1;
                    junkevent.dept1=this.junkdept1;
                    junkevent.email1=this.junkemail1;

                    junkevent.pname2=this.junkpname2;
                    junkevent.contact2=this.junkcontact2;
                    junkevent.dept2=this.junkdept2;
                    junkevent.email2=this.junkemail2;
                              this.eventservice.addEvent(junkevent)
                              .subscribe(res =>{
                             
                               });  
                              }


  }
  changeShape(shape){
  if(shape.value=="Others") {this.other=true;}
  else {this.other=false;this.newclg=shape.value;}
}
}
