
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StartPage } from '../start/start.page';
import { Start2Page } from '../start2/start2.page';

import { Router } from '@angular/router';

@Component({
  selector: 'app-pick-collection',
  templateUrl: './pick-collection.page.html',
  styleUrls: ['./pick-collection.page.scss'],
})
export class PickCollectionPage implements OnInit {

  constructor(
    public modalCtrl: ModalController, private router: Router) { }

  

  ngOnInit() {
  }
  async goToStartPage() {
    const modal = await this.modalCtrl.create({
      component: StartPage
    })
    return await modal.present();
  }
  async goToStart2Page() {
    const modal = await this.modalCtrl.create({
      component: Start2Page
    })
    return await modal.present();
  }

}
