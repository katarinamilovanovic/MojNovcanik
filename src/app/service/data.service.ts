import { Injectable } from '@angular/core';

import {
  collection,
  Firestore,
  collectionData,
  doc,
  deleteDoc, 
  addDoc
  } from '@angular/fire/firestore';
  export interface Stan_i_racuni {
  datum: string;
  mesec: string;
  prioritet: string;
  iznos: number;
  }
  export interface Cost {
    id?: number,
    amount?: number;
    date: string;
    done: boolean;
    priority: string;
    category: string;
  }
  export interface User {
    email?: number;
    name: string;
    surname: string;
    password: string;
  }
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  addCost(cost: Cost) {
    const costsRef = collection(this.firestore, 'costs');
    return addDoc(costsRef, cost);
  }

}
