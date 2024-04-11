import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejern1',
  standalone: true,
  imports: [    
    FormsModule,
  ],
  templateUrl: './ejern1.component.html',
  styleUrl: './ejern1.component.css'
})
export class Ejern1Component {

  protected edadUno!: number;
  protected edadDos!: number;
  protected suma! : number;
  protected promedio! : number;

  protected calcular(){

    if(this.edadUno && this.edadDos){

        this.suma = this.edadUno + this.edadDos;
        this.promedio = (this.edadUno + this.edadDos) / 2;

    } else {
      
      alert("Faltan introducir datos");

    }
    
  }

  protected limpiar(){

    if(this.edadUno && this.edadDos){

      this.edadUno = 0;
      this.edadDos = 0;
      this.promedio = 0;
      this.suma = 0;

  } else {
    
    alert("Faltan introducir datos");

  }
    
  }

}
