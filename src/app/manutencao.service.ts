import { Injectable } from '@angular/core';

interface Manutencao {
  id: number;
  weekDay: String;
  time: String;
  name: String;
  p1?: String;
  p2?: String;
}

@Injectable()
export class ManutencaoService {
  private manutencaoList: Manutencao[] = [];

  constructor() {}

  getList() {
    if (localStorage.getItem('list')) {
      this.manutencaoList = JSON.parse(localStorage.getItem('list'));
    }
    return this.manutencaoList;
  }

  add(inputWeekDay: String, inputTime: String, inputName: String) {
    this.getList().push({
      id: new Date().getTime(),
      weekDay: inputWeekDay,
      time: inputTime,
      name: inputName,
      p1: '0',
      p2: '0'
    });
    localStorage.setItem('list', JSON.stringify(this.manutencaoList));
  }

  updateGrades(inputP1: String, inputP2: String, id: number) {
    this.manutencaoList[
      this.manutencaoList.findIndex(e => e.id === +id)
    ].p1 = inputP1;
    this.manutencaoList[
      this.manutencaoList.findIndex(e => e.id === +id)
    ].p2 = inputP2;
    localStorage.setItem('list', JSON.stringify(this.manutencaoList));
  }

  remove(id: number) {
    this.manutencaoList.splice(
      this.manutencaoList.findIndex(e => e.id === id),
      1
    );
    localStorage.setItem('list', JSON.stringify(this.manutencaoList));
  }
}
