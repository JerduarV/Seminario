import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async onLogin(email, password){
    try {
      const user = await this.authService.login(email.value, password.value);
      if(user){
        const v = this.authService.isVerified(user);
        this.redirectUser(v, user.uid);
      }
    } catch (error) {
      console.log('Error', error);
    }
  }

  async onLoginGoogle(){
    try {
      const user = await this.authService.loginGoogle();
      if(user){
        const v = this.authService.isVerified(user);
        this.redirectUser(v, user.uid);
      }
    } catch (error) {
      console.log('Error', error);
    }
  }

  private redirectUser(verified: boolean, u_id: string): void{
    if(verified){
      //this.router.navigate(['admin']);
      this.router.navigate(['home']);
    }else{
      this.router.navigate(['verify-email']);
    }
  }

}
