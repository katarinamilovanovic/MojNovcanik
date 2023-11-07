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
  export interface Zabava {
    datum: string;
    mesec: string;
    prioritet: string;
    iznos: number;
  }
  export interface Prevoz {
    datum: string;
    mesec: string;
    prioritet: string;
    iznos: number;
  }
  export interface Garderoba {
    datum: string;
    mesec: string;
    prioritet: string;
    iznos: number;
  }
  export interface Nega {
    datum: string;
    mesec: string;
    prioritet: string;
    iznos: number;
  }
  export interface Hrana {
    datum: string;
    mesec: string;
    prioritet: string;
    iznos: number;
  }
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
}
