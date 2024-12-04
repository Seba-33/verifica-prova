import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-primo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primo.component.html',
  styleUrl: './primo.component.css'
})
export class PrimoComponent {
  name = 'primo';

}
