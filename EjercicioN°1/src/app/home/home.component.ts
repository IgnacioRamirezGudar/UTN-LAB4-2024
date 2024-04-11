import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [    
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  protected materia = 'Laboratorio IV - UTN';



  protected urlEjerN1(){

    window.open("home/ejercicioN1");
    
  }

}
