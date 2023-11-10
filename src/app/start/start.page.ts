import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewItemPage } from '../add-new-item/add-new-item.page';
import { UpdateItemPage } from '../update-item/update-item.page';

type Cost={
  amount?: number,
  category?: string,
  date?: Date,
  priority?: string,
  id?: number
}

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  today: number = Date.now();
  costs: Array<Cost> = [];


  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
    this.costs = [
      {
      category: "Gas",
      date: new Date(),
      amount: 2000,
      priority: 'High',
      id: 1
      },
      {
      category: "Clothes",
      date: new Date(),
      amount: 4000,
      priority: 'High',
      id: 2
      }
      ]
      
  }

  async goToAddPage() {
    const modal = await this.modalCtrl.create({
    component: AddNewItemPage
    })
    return await modal.present();
    }
    async goToUpdatePage(cost: Cost) {
    const modal = await this.modalCtrl.create({
    component: UpdateItemPage,
    componentProps: cost
    })
    return await modal.present(); } 

}
