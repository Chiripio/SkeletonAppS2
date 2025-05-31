import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  // 👇 Esto fuerza a NO usar standalone
  standalone: false
})
export class LoginPage implements OnInit {
  user = {
    usuario: '',
    password: ''
  };

  constructor(private alertController: AlertController, private router: Router) {}

  ngOnInit() {}

  ingresar() {
    const esUsuarioValido = /^[a-zA-Z0-9]{3,8}$/.test(this.user.usuario);
    const esPasswordValida = /^[0-9]{4}$/.test(this.user.password);

    if (esUsuarioValido && esPasswordValida) {
      const navigationExtras: NavigationExtras = {
        state: {
          usuario: this.user.usuario
        }
      };
      this.router.navigate(['/home'], navigationExtras);
    } else {
      this.alertController.create({
        header: 'Advertencia',
        message: 'Usuario o contraseña no cumplen los requisitos mínimos.',
        buttons: ['Aceptar']
      }).then(alert => alert.present());
    }
  }
}
