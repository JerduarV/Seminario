import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LecturaService } from 'src/app/services/lectura.service';

@Component({
  selector: 'app-lecturas',
  templateUrl: './lecturas.page.html',
  styleUrls: ['./lecturas.page.scss'],
})
export class LecturasPage implements OnInit {

  user = null;

  constructor(private route: ActivatedRoute,private lectService: LecturaService, private authService: AuthService) { }

  ngOnInit() {
    console.log(this.authService.afAuth.auth.currentUser.email);
    this.user = this.route.snapshot.params['user'];
    if(this.user){
      console.log(this.user);
      this.lectService.getLect(this.user);
    }
  }

}
