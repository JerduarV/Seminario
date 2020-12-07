import { Component, OnInit } from '@angular/core';
import { LecturaI } from '../models/task.interface';
import { LecturaService } from '../services/lectura.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lecturas: LecturaI[];
  user_id: String;

  constructor(private lecturaService: LecturaService) { }

  ngOnInit() {
    this.user_id = firebase.auth().currentUser.uid;
    this.lecturaService.getLecturas().subscribe(res => {
      this.lecturas = res;
    });
  }
}
