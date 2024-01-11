import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public email: any;
  public password: any;

  constructor(

    public router: Router,
    public authenticationService: AuthenticationService
  ) {}


  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  login(){
    this.authenticationService.loginWithEmail({email:this.email,password:this.password}).then(res=>{
      console.log(res);
      if(res.user.uid){
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


  signup(){
    this.router.navigateByUrl('register')
  }

}


