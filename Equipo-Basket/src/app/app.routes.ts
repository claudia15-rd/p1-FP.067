import { Routes } from '@angular/router';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { PlayersComponentComponent } from './players-component/players-component.component';

export const routes: Routes = [
                                {path: '', component: PlayersComponentComponent},
                                {path: 'player/:id', component: DetailComponentComponent},
                              ];