import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { LecturaI } from 'src/app/models/task.interface';
import { LecturaService } from 'src/app/services/lectura.service';

@Component({
  selector: 'app-test-lect',
  templateUrl: './test-lect.page.html',
  styleUrls: ['./test-lect.page.scss'],
})
export class TestLectPage implements OnInit {

  lectura: LecturaI = {
    nombre: '',
    factor: 5,
    contenido: '',
    user_id: ''
  }

  lectId = null;
  arreglo_palabras = [];

  constructor(
    private route: ActivatedRoute, private nav: NavController,
    private lectService: LecturaService, private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.lectId = this.route.snapshot.params['id'];
    if (this.lectId) {
      this.loadLect();
    }
  }

  async loadLect() {
    const loading = await this.loadingController.create({
      message: 'Loading.....'
    });

    await loading.present();
    this.lectService.getLectura(this.lectId).subscribe(res => {
      loading.dismiss();
      this.lectura = res;
      this.arreglo_palabras = this.lectura.contenido.split(" ");
      //console.log(this.arreglo_palabras);
    });
  }

}
