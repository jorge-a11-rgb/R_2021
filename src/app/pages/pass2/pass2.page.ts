import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';

import { ToastController } from '@ionic/angular';
import { Usuario_pass2 } from 'src/app/model/Ususario_pass2';


@Component({
  selector: 'app-pass2',
  templateUrl: './pass2.page.html',
  styleUrls: ['./pass2.page.scss'],
})
export class Pass2Page implements OnInit {


  public usuario: Usuario_pass2;

  constructor(private router: Router, private toastController: ToastController) {
    this.usuario = new Usuario_pass2();
    this.usuario.password1 = '';
    this.usuario.password2 = '';
  }

  public ngOnInit(): void {

  }

  public ingresar(): void {

    if(!this.validarUsuario(this.usuario)) {
      return;
    }

    this.mostrarMensaje('Contraseña reestablecida');


    const navigationExtras: NavigationExtras = {
      state: {
        usuario: this.usuario
      }
    };
    this.router.navigate(['/login'], navigationExtras);
  }


  public validarUsuario(usuario: Usuario_pass2): boolean {

    const mensajeError = usuario.validarpass();

    if (mensajeError) {
      this.mostrarMensaje(mensajeError);
      return false;
    }

    return true;
  }

  /**
   * Muestra un toast al usuario
   *
   * @param mensaje Mensaje a presentar al usuario
   * @param duracion Duración el toast, este es opcional
   */
  async mostrarMensaje(mensaje: string, duracion?: number) {
    const toast = await this.toastController.create({
        message: mensaje,
        duration: duracion? duracion: 2000
      });
    toast.present();
  }

}
