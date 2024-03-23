import { Component, OnInit } from '@angular/core';
import {DatosPlayersService} from '../service/datos-players.service';
import { CommonModule } from '@angular/common';
import { Player } from '../model/player';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {NameFilterPipe} from '../pipe/text-filter.pipe';


@Component({
  selector: 'app-players-component',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule, NameFilterPipe],

  templateUrl: './players-component.component.html',
  styleUrl: './players-component.component.css'
})


export class PlayersComponentComponent implements OnInit{
  

  players: Player[]=this.datosPlayerServie.getPlayers();

  filterSearch ='';
  opcion='Nombre';

  constructor (private datosPlayerServie:DatosPlayersService){}

  ngOnInit():void{
   // this.getPlayers();
    
  }

  getPlayers(): void {
    this.players=this.datosPlayerServie.getPlayers();
    
  }


}
