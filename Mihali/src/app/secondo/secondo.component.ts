import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TerzoComponent } from '../terzo/terzo.component';

@Component({
  selector: 'app-secondo',
  standalone : true,
  imports: [CommonModule,TerzoComponent],
  templateUrl: './secondo.component.html',
  styleUrl: './secondo.component.css'
})
export class SecondoComponent {

}
