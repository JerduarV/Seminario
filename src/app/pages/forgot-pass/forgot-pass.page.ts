import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.page.html',
  styleUrls: ['./forgot-pass.page.scss'],
})
export class ForgotPassPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async onResetPass(email){
    try {
      console.log('Email', email.value);
      await this.authService.resetPasswrod(email.value);
      this.router.navigate(['/login']);
    } catch (error) {
      console.log('Error', error);
    }
  }

}
