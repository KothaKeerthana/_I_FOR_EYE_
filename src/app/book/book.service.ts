import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(public db:AngularFireDatabase) { }

  setBook(url,form){
      this.db.list("Books").push(
        {
          imageUrl:url,
          title:form.value.title,
          author:form.value.author,
          genre:form.value.genre,
          language:form.value.language
        }
      );
  }
  getBooks()
  {
    console.log(this.db.list("Books"));
    return this.db.list("Books");
  }
  removebook(id):void
  {
    console.log(id);
    this.db.object("Books/"+id).remove();
  }
  bkupdate(id,p)
  {

  }

}
