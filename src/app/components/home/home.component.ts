import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../shared/code-block/code.component';

@Component({
  selector: 'app-home',
  imports: [CodeBlockComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
