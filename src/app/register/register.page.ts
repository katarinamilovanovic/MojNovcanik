import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  public name!: any;
  public email!: any;
  public password!: any;


  constructor(
    public modalCtrl: ModalController, public authenticationService: AuthenticationService, private router: Router
  ) { }

  ngOnInit() {
  }

 async signup(){ 
    await this.authenticationService.signup({name: this.name, email:this.email,password:this.password}).then(res=>{
      if(res.user.uid){
        let data = {
          name:this.name,
          email:this.email,
          password:this.password,
          id:res.user.uid
        }
        this.authenticationService.saveDetails(data).then(res=>{
        alert('Account Created!');

       
        },err=>{
          console.log(err);
        })
      }
    },err=>{
      alert(err.message);
      console.log(err);
    })
  }
  

  async goToHomePage() {
    const modal = await this.modalCtrl.create({
      component: HomePage
    })
    return await modal.present();
  }
}
