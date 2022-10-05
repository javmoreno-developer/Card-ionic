import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  
  name: string ="";
  surname: string ="";

  constructor() { 
    this.name ="Nombre Inventado";
    this.surname="Apellido Inventado";
  }

  ngOnInit() {}

}
