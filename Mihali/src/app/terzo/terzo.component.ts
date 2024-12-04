import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-terzo',
  standalone : true,
  imports: [CommonModule],
  templateUrl: './terzo.component.html',
  styleUrl: './terzo.component.css'
})
export class TerzoComponent {
  name = 'terzo';
}
