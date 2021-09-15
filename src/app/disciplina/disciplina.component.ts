import { Component, OnInit } from '@angular/core';
import { ManutencaoService } from '../manutencao.service';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {
  inputWeekDay: String;
  inputTime: String;
  inputName: String;

  constructor(public manutencaoService: ManutencaoService) {}

  handleClick() {
    this.manutencaoService.add(
      this.inputWeekDay,
      this.inputTime,
      this.inputName
    );
    this.inputWeekDay = '';
    this.inputTime = '';
    this.inputName = '';
  }

  ngOnInit() {}
}
