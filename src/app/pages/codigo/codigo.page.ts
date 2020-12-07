import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.page.html',
  styleUrls: ['./codigo.page.scss'],
})
export class CodigoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getTest(codigo){
    console.log(codigo.value);
    this.router.navigate(['test-lect/' + codigo.value])
  }

}
