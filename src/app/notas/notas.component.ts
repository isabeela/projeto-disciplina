import { Component, OnInit } from '@angular/core';
import { ManutencaoService } from '../manutencao.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  p1: String;
  p2: String;
  id: number

  constructor(public manutencaoService: ManutencaoService) {}

  ngOnInit() {}

  handleClick() {
    // this.schedulesService.add(
    //   this.inputWeekDay,
    //   this.inputTime,
    //   this.inputName
    // );

    this.manutencaoService.updateGrades(
      this.p1,
      this.p2,
      this.id
    )
    this.p1 = '';
    this.p2 = '';
  }
}
