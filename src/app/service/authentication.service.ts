import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from '@firebase/firestore';
import { dismiss } from '@ionic/core/dist/types/utils/overlays';

export interface User {
  name: string;
  email: string;
  password: string;
  uid?: string;
}



@Injectable({
  providedIn: 'root'
})



export class AuthenticationService {

  constructor(

    public firestore: Firestore,
    public auth: AngularFireAuth
  ) { }

 

  loginWithEmail(data: { email: any; password: any; }){
    return this.auth.signInWithEmailAndPassword(data.email, data.password);
 }

  signup(data: User){
    return this.auth.createUserWithEmailAndPassword(data.email, data.password);
  }

  saveDetails(data: User){
    const userData = collection(this.firestore, 'users');
    return addDoc(userData, data);
  }

  getDetails(data: { uid: any; }){
    const details = collection(this.firestore, 'users');
    return collectionData(details, {idField: 'uid'});
  }

}
