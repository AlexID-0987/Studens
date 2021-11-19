import { Component, Input, OnInit } from '@angular/core';
import { Pers } from '../person/person_intef';

@Component({
  selector: 'app-person-deteils',
  templateUrl: './person-deteils.component.html',
  styleUrls: ['./person-deteils.component.css']
})
export class PersonDeteilsComponent implements OnInit {
  
 @Input()Pe?:Pers;

  constructor() { }

  ngOnInit(): void {
  }

}
