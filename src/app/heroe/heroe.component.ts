import {Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-heroe',
  standalone: true,
  imports: [CommonModule
  ],
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  public name:string="Superman";
  public age:number=20;
  public lista:string[]=["avengers","hulk", "spiderman", "capitan america"];

  cambiarNombre():void{
    this.name="Spiderman";
  }
  cambiarEdad():void{
    this.age+=10;
  }

}
