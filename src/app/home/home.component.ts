import { Component, OnInit } from '@angular/core';
import {BookService} from '../book/book.service';
// import{AngularFireList} from '@angular/fire'

import {AngularFireObject} from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  details: any[] = [];
  constructor(public bs:BookService) { }

  ngOnInit(): void {
      this.bs.getBooks().snapshotChanges().subscribe(res=>{
        res.forEach(data=>{
          this.details.push(data);
        });
        console.log(res);

      });
    }
    delete(id):void
    {
      console.log(id);
      this.bs.removebook(id);
      this.details=[];
    }
    updatebook(id,p){
      this.bs.bkupdate(id,p);
    }

  }
