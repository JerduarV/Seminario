import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LecturaI } from '../models/task.interface';
import { Usuario } from '../models/usuario.interface';
import { LecturaService } from './lectura.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuariosCollection: AngularFirestoreCollection<Usuario>;
  private usuarios: Observable<Usuario[]>;

  constructor(private db: AngularFirestore) {
    this.usuariosCollection = db.collection<Usuario>('Usuarios');
    this.usuarios = this.usuariosCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      }
    ));
  }

  public addUsuario(usr: Usuario) {
    return this.usuariosCollection.add(usr);
  }

  public addLecturas(id: string, Lect: LecturaI){
    this.db.collection('Usuarios').doc(id).set({
      lecturas: Lect
    });
  }
}
