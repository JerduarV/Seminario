import { Component, OnInit } from '@angular/core';
import { LecturaI } from '../models/task.interface';
import { LecturaService } from '../services/lectura.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lecturas: LecturaI[];

  constructor(private lecturaService: LecturaService) {}

  ngOnInit(){
    this.lecturaService.getLecturas().subscribe(res => {
      this.lecturas = res;
    });
  }
}
