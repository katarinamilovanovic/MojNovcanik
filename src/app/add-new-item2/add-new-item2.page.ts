import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { DataService } from '../service/data.service';

@Component({
  selector: 'app-add-new-item2',
  templateUrl: './add-new-item2.page.html',
  styleUrls: ['./add-new-item2.page.scss'],
})

export class AddNewItem2Page implements OnInit {
  incomeCategory!: string
  incomeAmount!: string
  incomeDate: string = '2023-11-12T00:00:00';

  constructor(public modalCtrl: ModalController, private dataservice: DataService) { }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  async addIncome() {
    await this.dataservice.addIncome(
      {
        category: this.incomeCategory,
        amount: this.incomeAmount,
        date: this.incomeDate
      }
    );

    this.dismiss();
  }

}
