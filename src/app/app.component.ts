import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AngularTestComponentComponent} from "./angular-test-component/angular-test-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AngularTestComponentComponent],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angylartest';
}
