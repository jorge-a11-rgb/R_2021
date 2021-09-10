/* eslint-disable prefer-const */

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { $ } from 'protractor';

import { createAnimation } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit, AfterViewInit {

  @ViewChild('titulo', { read: ElementRef, static: true}) titulo: ElementRef;


   constructor(
        private animationController: AnimationController) {}

  public ngAfterViewInit(): void {
    let animation = this.animationController.create()
      .addElement(this.titulo.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translate(0px)', 'translate(100px)')
      .fromTo('opacity', 1, 0.2);

    animation.play();
  }


public ngOnInit() {
  // this.persona.nombre = 'CristiÃ¡n';
  // this.persona.apellido = 'GÃ³mez';
  // this.persona.nivelEducacional.id = 6;
  // this.persona.fechaNacimiento = '1972-12-26';
}



}
