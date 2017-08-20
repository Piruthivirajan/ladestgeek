import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Event}  from './Event';
import { EventService} from './Event.service';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [EventService]
})
export class ReportComponent {

registers:Event;

    constructor(public eventservice:EventService,private router: Router) {
      
    }
    ngOnInit() {
            this.getDetails();
    }
    getDetails(){
      this.eventservice.getDetails().subscribe(reg =>{
         this.registers=reg;
       });
    }

 delete(value:any) {
 this.eventservice.removePart(value).subscribe(reg =>{      
       });
       this.getDetails();
       this.router.navigateByUrl('/report');
 }
}
