import { Component, OnInit } from '@angular/core';
import { ManutencaoService } from '../manutencao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public manutencaoService: ManutencaoService) {}

  ngOnInit() {}
}
