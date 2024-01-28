import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { PickCollectionPage } from '../pick-collection/pick-collection.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public email: any;
  public password: any;

  constructor(
    public modalCtrl: ModalController,
    public router: Router,
    public authenticationService: AuthenticationService
  ) {}


  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  
  login(){
    this.authenticationService.loginWithEmail({email:this.email,password:this.password}).then(res=>{
      console.log("Prosao login");
      console.log(res);
      if(res.user.uid){
        let user_id = res.user.uid;
        // this.authenticationService.getDetails({uid:user_id})
        this.authenticationService.getDetails({uid:res.user.uid}).subscribe(res=>{
          console.log(res);
        //alert('Welcome '+ res['name']);

      },err=>{
        console.log(err);
      });
      }
    },err=>{
      alert(err.message)
      console.log(err);
    })
  }

  async goToPickCollectionPage() {
    const modal = await this.modalCtrl.create({
      component: PickCollectionPage
    })
    return await modal.present();
  }

  signup(){
    this.router.navigateByUrl('register')
  }

}


