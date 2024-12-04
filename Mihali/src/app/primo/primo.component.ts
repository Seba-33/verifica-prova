import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SecondoComponent } from '../secondo/secondo.component';


@Component({
  selector: 'app-primo',
  standalone: true,
  imports: [CommonModule,SecondoComponent],
  templateUrl: './primo.component.html',
  styleUrl: './primo.component.css'
})
export class PrimoComponent {

}
