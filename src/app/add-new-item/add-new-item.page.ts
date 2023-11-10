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
  costDate: string = '2023-10-24T00:00:00'
  costAmount?: number;

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
        date: this.costDate,
        priority: this.costPriority,
        amount: this.costAmount,
        done: false
      }
    );

    this.dismiss();
  }

}
