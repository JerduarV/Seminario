import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LecturaI } from '../models/task.interface';

@Injectable({
  providedIn: 'root'
})
export class LecturaService {

  private lecturaCollection: AngularFirestoreCollection<LecturaI>;
  private lecturas: Observable<LecturaI[]>;

  constructor(db: AngularFirestore) {
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
    return this.lecturas;
  }

  getLectura(id: string){
    return this.lecturaCollection.doc<LecturaI>(id).valueChanges();
  }

  updateLectura(lect: LecturaI, id: string){
    return this.lecturaCollection.doc(id).update(lect);
  }

  addLectura(lect: LecturaI){
    return this.lecturaCollection.add(lect);
  }

  removeLectura(id: string){
    return this.lecturaCollection.doc(id).delete();
  }
}
