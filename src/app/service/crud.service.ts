import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservice:AngularFirestore) { }

  create_NewEmployee(Record){
    return this.fireservice.collection('Employee').add(Record)
  }
}


