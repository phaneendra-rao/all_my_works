import { Component, OnInit, OnDestroy } from '@angular/core';

//importing route related packages
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { IceandfireService } from '../iceandfire.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [Location]
})
export class BookComponent implements OnInit, OnDestroy {
 
  public bookDetails:any;
  public booksUrl="https://www.anapioficeandfire.com/api/books"; 
  public allBooks;

  constructor(private _route: ActivatedRoute, private router: Router, private location:Location, public iceandfire:IceandfireService) { }

  ngOnInit() {

    //let bookId = this._route.snapshot.paramMap.get('bookId');
    //console.log(myBlogId);

    this._route.params.subscribe(params => {
      this.iceandfire.getBookDetails(params['bookId'])
        .subscribe( data=>{
                  this.bookDetails = data;  
                  //console.log(this.bookDetails);   
            },
            error=>{
            console.log("some error occured");
            console.log(error.errorMessage); 
        })
    })

    // this.bookDetails = this.iceandfire.getBookDetails(bookId).subscribe(
    //   data=>{
    //         this.bookDetails = data;  
    //         console.log(this.bookDetails);   
    //   },
    //   error=>{
    //   console.log("some error occured");
    //   console.log(error.errorMessage);    
    // });

    this.allBooks = this.iceandfire.getBooks(this.booksUrl).subscribe(
      data=>{
            this.allBooks = data;
            this.allBooks = Array.of(this.allBooks);   
            //console.log(this.allBooks);   
      },
      error=>{
      console.log("some error occured");
      console.log(error.errorMessage);    
    });


  }

  public goBackToPreviousPage(): any {
    this.location.back();
  }

  ngOnDestroy(){

  }

}
