import { Component, OnInit, OnDestroy } from '@angular/core';
import { IceandfireService } from '../iceandfire.service';
import { icefire } from '../icefire';


import { icefire_books } from '../icefire_books';
import { icefire_characters } from '../icefire_characters';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public allApiUrls:icefire;

  public allBooks:any;
  public allCharacters:any;
  public allHouses:any;
  
  // public allDataBooks:any = {};
  // public allDataCharacters:any = [];
  //  public allDataHouses:any;
  public gameofthrones:any;
  public headers;
  error: any;
  //public getBooksData:icefire_books;

  public booksUrl = "https://www.anapioficeandfire.com/api/books"; 
  public charactersUrl = "https://www.anapioficeandfire.com/api/characters"; 
  public housesUrl = "https://www.anapioficeandfire.com/api/houses";

  constructor( public iceandfire:IceandfireService) { }


  



  ngOnInit() {
 


      // this.getData();
      // this.getBooks(this.booksUrl);
      // this.getCharacters(this.charactersUrl)
     
    //   this.iceandfire.getIceAndFire().subscribe(resp => {
      
    //     const keys = resp.headers.keys();
    //     this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);      
    //     this.allApiUrls = { ... resp.body };           
    //     console.log(this.allApiUrls);
    //   },
    //   error => this.error = error // error path
    //  );

  //    this.iceandfire.getBooks(this.booksUrl).subscribe(resp => {
        
  //     const keys = resp.headers.keys();
  //     this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);        
  //     this.allBooks = { ... resp.body };
  //     console.log(this.allBooks);

  //     this.iceandfire.getCharacters(this.charactersUrl).subscribe(resp => {
        
  //       const keys = resp.headers.keys();
  //       this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);
  //       this.allCharacters = { ... resp.body };
        
  //       console.log(this.allCharacters);

  //       this.gameofthrones = [...this.allBooks, ...this.allCharacters]; 
  //       console.log(this.gameofthrones);
        
  //       },
  //       error => this.error = error // error path     
  //     );


  //   },
  //   error => this.error = error // error path     
  // );  
 
  this.iceandfire.getBooks(this.booksUrl).subscribe(
    data=>{
    //console.log("Getting all books data");
    //console.log(data);
    this.allBooks = data;    
      
        this.iceandfire.getCharacters(this.charactersUrl).subscribe(
          data=>{
           // console.log("Getting all characters data");
           // console.log(data);
            this.allCharacters = data;
            
                this.iceandfire.getHouses(this.housesUrl).subscribe(
                  data=>{
                   // console.log("Getting all houses data");
                    //console.log(data);
                    this.allHouses = data;
                    
                    //console.log(this.allBooks);
                    //console.log(this.allCharacters);
                    //console.log(this.allHouses);
                    
                    
                    
                    this.gameofthrones = [{books:this.allBooks, characters:this.allCharacters, houses:this.allHouses}]; 
                    console.log(this.gameofthrones);

                  },
                  error=>{
                    console.log("some error occured");
                    console.log(error.errorMessage);
                    
                    
                  }
                );           
          },
          error=>{
            console.log("some error occured");
            console.log(error.errorMessage);
            
          }
        );
    },
    error=>{
    console.log("some error occured");
    console.log(error.errorMessage);    
  });
 

  }
  

  ngOnDestroy()
  {

  }

}
