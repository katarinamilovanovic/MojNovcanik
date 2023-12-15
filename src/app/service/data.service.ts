import { Injectable } from '@angular/core';

import {
  collection,
  Firestore,
  collectionData,
  doc,
  deleteDoc, 
  addDoc
  } from '@angular/fire/firestore';
  import { updateDoc } from 'firebase/firestore';

  
  export interface Cost {
    id?: number;
    amount: string;
    date: string;
    priority: string;
    category: string;
  }
  export interface Income {
    id?: number;
    amount: string;
    date: string;
    category: string;
  }
  export interface User {
    email: string;
    name: string;
    surname: string;
    password: string;
  }
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getCosts() {
    const costsRef = collection(this.firestore, 'costs');
    return collectionData(costsRef, { idField: 'id' });
  }
  getIncomes() {
    const incomesRef = collection(this.firestore, 'incomes');
    return collectionData(incomesRef, { idField: 'id' });
  }

 

  //sa celim objektom
  deleteCost(cost: Cost) {
    const costRef = doc(this.firestore, `costs/${cost.id}`);
    return deleteDoc(costRef);
  }
  deleteIncome(income: Income) {
    const incomeRef = doc(this.firestore, `incomes/${income.id}`);
    return deleteDoc(incomeRef);
  }

  addCost(cost: Cost) {
    const costsRef = collection(this.firestore, 'costs');
    return addDoc(costsRef, cost);
  }
  addIncome(income: Income) {
    const incomesRef = collection(this.firestore, 'incomes');
    return addDoc(incomesRef, income);
  }

  updateCost(cost: Cost) {
    const costRef = doc(this.firestore, `costs/${cost.id}`);
    return updateDoc(costRef, {
      date: cost.date,
      priority: cost.priority,
      category: cost.category,
      amount: cost.amount
    });
  }
  updateIncome(income: Income) {
    const incomeRef = doc(this.firestore, `incomes/${income.id}`);
    return updateDoc(incomeRef, {
      date: income.date,
      category: income.category,
      amount: income.amount
    });
  }


}
