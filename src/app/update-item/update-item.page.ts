import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService, Cost } from '../service/data.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.page.html',
  styleUrls: ['./update-item.page.scss'],
})
export class UpdateItemPage implements OnInit {
  @Input() cost: any;
  number: number = 0;

  constructor(public modalCtrl: ModalController, private dataService: DataService) { }

  ngOnInit() {
    console.log(this.cost); 
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  async updateCost() {

    await this.dataService.updateCost(this.cost);
  }



}

