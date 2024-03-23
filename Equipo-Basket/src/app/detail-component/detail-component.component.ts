import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DatosPlayersService} from '../service/datos-players.service';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { MediaComponentComponent } from '../media-component/media-component.component';

@Component({
  selector: 'app-detail-component',
  standalone: true,
  imports: [RouterModule, MediaComponentComponent, CommonModule],
  templateUrl: './detail-component.component.html',
  styleUrl: './detail-component.component.css'
})
export class DetailComponentComponent  implements OnInit, OnDestroy {
  id: any;
  player: any;
  private sub: any

  constructor(private route: ActivatedRoute, private datosPlayerServie:DatosPlayersService) {}

  ngOnInit() {
    console.log("muestra");
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.player = this.datosPlayerServie.getPlayerById(this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
