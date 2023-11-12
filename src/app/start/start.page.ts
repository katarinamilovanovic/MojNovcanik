import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewItemPage } from '../add-new-item/add-new-item.page';
import { UpdateItemPage } from '../update-item/update-item.page';
//import Task from '';


import { Cost, DataService } from '../service/data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-start',
  templateUrl: 'start.page.html',
  styleUrls: ['start.page.scss'],
})
export class StartPage implements OnInit, OnDestroy {

  today: number = Date.now();
  costs: any;
  sub: Subscription = new Subscription;

  constructor(
    public modalCtrl: ModalController,
    private dataService: DataService) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    this.sub = this.dataService.getCosts().subscribe((res) => {
      this.costs = res;
      console.log(this.costs);
    });
  }

  async deleteCost(cost: any) {
    await this.dataService.deleteCost(cost);
  }

  async goToAddPage() {
    const modal = await this.modalCtrl.create({
      component: AddNewItemPage
    })
    return await modal.present();
  }

  async goToUpdatePage(cost:Cost) {

    const modal = await this.modalCtrl.create({
      component: UpdateItemPage,
      componentProps: { cost }
    })
    console.log(cost)
    return await modal.present();
  }

}
