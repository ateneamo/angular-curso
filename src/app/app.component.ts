import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroeComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicio1';
}
