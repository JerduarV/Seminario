import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async onRegister(email, password, rol){
    try {
      console.log(rol.value);
      const user = await this.authService.register(email.value, password.value, rol.value);
      if(user){
        const v = this.authService.isVerified(user);
        this.redirectUser(v);
      }
    } catch (error) {
      console.log('Error', error);
    }
  }

  private redirectUser(verified: boolean): void{
    if(verified){
      this.router.navigate(['admin']);
    }else{
      this.router.navigate(['verify-email']);
    }
  }

}
