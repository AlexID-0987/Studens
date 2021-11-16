import { Component, OnInit } from '@angular/core';
import { Persons } from '../Persons';
import { Pers } from './person_intef';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() {}
  persone=Persons

  ngOnInit(): void {
  }

}
