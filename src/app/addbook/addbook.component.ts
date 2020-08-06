import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {BookService} from '../book/book.service';
import {AngularFireStorage} from '@angular/fire/storage'
import { AngularFireModule } from '@angular/fire';
import {finalize} from 'rxjs/operators'



@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  selectedImg: any = null;
  url:string;
  file:string;

  constructor( public bs: BookService, public storage:AngularFireStorage) { }

  bookupload(formData:NgForm)
  {
    var name = this.selectedImg.name;
    const fileRef = this.storage.ref(name);

    this.storage.upload(name,this.selectedImg).snapshotChanges().pipe(
      finalize(()=>{
        fileRef.getDownloadURL().subscribe((url)=>
        {
          this.url=url;
          this.bs.setBook(url,formData);
          alert("Upload Successull");

        })
      })
    ).subscribe();





  }

  showPreview(event: any){
    this.selectedImg = event.target.files[0];

  }


  ngOnInit(): void {
  }

}
