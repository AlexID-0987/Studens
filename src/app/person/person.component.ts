import { Component, OnInit } from '@angular/core';
import {Pers} from "./person_intef";
import {CrudpersonService} from "../crudperson.service";


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  show:boolean=true;

  constructor(private personeService: CrudpersonService) {}
  persone:Pers[]=[];
  selectedPersone?:Pers;
  ngOnInit(): void {
    this.getPersone();
  }
 Personeupdate(p:Pers):void{
 this.selectedPersone=p;
 }
 chacgeVis(){
   this.show=!this.show;
 }
 getPersone(){
    //this.persone=this.personeService.getPersone();
   this.personeService.getPersone().subscribe(persone=>this.persone=persone)
 }
}
