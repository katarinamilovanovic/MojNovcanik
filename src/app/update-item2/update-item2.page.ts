import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService, Income } from '../service/data.service';

@Component({
  selector: 'app-update-item2',
  templateUrl: './update-item2.page.html',
  styleUrls: ['./update-item2.page.scss'],
})
export class UpdateItem2Page implements OnInit {
  @Input() income: any;
  number: number = 0;

  constructor(public modalCtrl: ModalController, private dataService: DataService) { }

  ngOnInit() {
    console.log(this.income); 
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  async updateIncome() {

    await this.dataService.updateIncome(this.income);
  }



}