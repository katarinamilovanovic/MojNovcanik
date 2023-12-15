import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewItem2Page } from '../add-new-item2/add-new-item2.page';
import { UpdateItem2Page } from '../update-item2/update-item2.page';
//import Task from '';


import { Income, DataService } from '../service/data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-start2',
  templateUrl: 'start2.page.html',
  styleUrls: ['start2.page.scss'],
})
export class Start2Page implements OnInit, OnDestroy {

  today: number = Date.now();
  incomes: any;
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
    this.sub = this.dataService.getIncomes().subscribe((res) => {
      this.incomes = res;
      console.log(this.incomes);
    });
  }

  async deleteIncome(income: any) {
    await this.dataService.deleteIncome(income);
  }

  async goToAddPage2() {
    const modal = await this.modalCtrl.create({
      component: AddNewItem2Page
    })
    return await modal.present()
  }

  async goToUpdatePage2(income:Income) {

    const modal = await this.modalCtrl.create({
      component: UpdateItem2Page,
      componentProps: { income }
    })
    console.log(income)
    return await modal.present();
  }

}
