import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  // 👇 Esto fuerza a NO usar standalone
  standalone: false
})
export class LoginPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
