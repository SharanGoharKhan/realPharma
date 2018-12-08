import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router) { }

  onLogin() {
    this.router.navigate(['dashboard']);
  }
  ngOnInit() {
      console.log('Auth Component called')
  }

}
