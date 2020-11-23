import { Component, OnInit } from '@angular/core';
import { LecturaI } from '../../models/task.interface';
import { LecturaService } from '../../services/lectura.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-lectura-details',
  templateUrl: './lectura-details.page.html',
  styleUrls: ['./lectura-details.page.scss'],
})
export class LecturaDetailsPage implements OnInit {

  lectura: LecturaI = {
    nombre: '',
    factor: 5,
    contenido: ''
  }

  lectId = null;

  constructor(
    private route: ActivatedRoute, private nav: NavController,
    private lectService: LecturaService, private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.lectId = this.route.snapshot.params['id'];
    if(this.lectId){
      this.loadLect();
    }
  }

  async loadLect(){
    const loading = await this.loadingController.create({
      message: 'Loading.....'
    });

    await loading.present();
    this.lectService.getLectura(this.lectId).subscribe(res => {
      loading.dismiss();
      this.lectura = res;
    });
  }

  async saveLectura(){
    const loading = await this.loadingController.create({
      message: 'Saving.....'
    });

    await loading.present();

    if(this.lectId){
      //Update
      this.lectService.updateLectura(this.lectura, this.lectId).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/');
      });
    }else{
      //Add
      this.lectService.addLectura(this.lectura).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/');
      });
    }
  }

  onRemove(lectId: string){
    this.lectService.removeLectura(lectId);
  }

}
