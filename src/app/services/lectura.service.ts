import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LecturaI } from '../models/task.interface';
import { AuthService } from './auth.service';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LecturaService {

  private lecturaCollection: AngularFirestoreCollection<LecturaI>;
  private lecturas: Observable<LecturaI[]>;

  constructor(private db: AngularFirestore, private usuario: AuthService, private u: UsuarioService) {
    this.lecturaCollection = db.collection<LecturaI>('Lecturas');
    this.lecturas = this.lecturaCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      }
    ));
  }

  getLecturas(){
    var lecturas = [];
    this.lecturas.forEach(element => {
      console.log(element);
    });
    return this.lecturas;
  }

  getLect(id: string){
    console.log(this.lecturaCollection);
  }

  getLectura(id: string){
    console.log(id);
    return this.lecturaCollection.doc<LecturaI>(id).valueChanges();
  }

  updateLectura(lect: LecturaI, id: string){
    return this.lecturaCollection.doc(id).update(lect);
  }

  addLectura(lect: LecturaI){
    var usuario = firebase.auth().currentUser;
    lect.user_id = usuario.uid;
    this.u.addLecturas(usuario.uid, lect);
    return this.lecturaCollection.add(lect);
  }

  removeLectura(id: string){
    return this.lecturaCollection.doc(id).delete();
  }
}
