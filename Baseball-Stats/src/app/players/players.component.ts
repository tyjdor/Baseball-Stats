import { Component, OnInit } from '@angular/core';
import { Player } from '../Player'
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  players: Player = {
    id: 1,
    name: 'Derek Jeter'
  }

  constructor() { }

  ngOnInit(): void {

  }

}
