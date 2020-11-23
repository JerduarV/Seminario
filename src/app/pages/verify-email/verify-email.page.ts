import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage{

  user$: Observable<User> = this.authService.afAuth.user;
  
  constructor(private authService: AuthService) { }

  async onResenEmail(): Promise<void>{
    try {
      await this.authService.sendVerificationEmail();
    } catch (error) {
      console.log('Error', error);
    }
  }

  ngOnDestroy():void{
    this.authService.logout();
  }
}
