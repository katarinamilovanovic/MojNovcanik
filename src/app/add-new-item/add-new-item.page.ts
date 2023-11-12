import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { DataService } from '../service/data.service';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.page.html',
  styleUrls: ['./add-new-item.page.scss'],
})

export class AddNewItemPage implements OnInit {
  costCategory!: string
  costPriority!: string
  costAmount!: string
  costDate: string = '2023-11-12T00:00:00';

  constructor(public modalCtrl: ModalController, private dataservice: DataService) { }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  async addCost() {
    await this.dataservice.addCost(
      {
        category: this.costCategory,
        priority: this.costPriority,
        amount: this.costAmount,
        date: this.costDate
      }
    );

    this.dismiss();
  }

}
