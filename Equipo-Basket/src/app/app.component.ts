import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayersComponentComponent } from "./players-component/players-component.component";
import { FormsModule, NgModel } from '@angular/forms';
import { MediaComponentComponent } from './media-component/media-component.component';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PlayersComponentComponent,FormsModule,MediaComponentComponent],
    
   
})
export class AppComponent {
  title = 'equipo-basket';
  
}
