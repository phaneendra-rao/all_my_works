import { Component, OnInit, OnDestroy } from '@angular/core';

//importing route related packages
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { IceandfireService } from '../iceandfire.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  providers: [Location]
})
export class CharacterComponent implements OnInit, OnDestroy {

  public characterDetails:any;
  public charactersUrl = "https://www.anapioficeandfire.com/api/characters"; 
  public allCharacters:any;

  constructor(private _route: ActivatedRoute, private router: Router, private location:Location, public iceandfire:IceandfireService) { }

  ngOnInit() {

    // let characterId = this._route.snapshot.paramMap.get('characterId');
    // //console.log(myBlogId);

    // this.characterDetails = this.iceandfire.getCharacterDetails(characterId).subscribe(
    //   data=>{
    //         this.characterDetails = data;  
    //         console.log(this.characterDetails);   
    //   },
    //   error=>{
    //   console.log("some error occured");
    //   console.log(error.errorMessage);    
    // });

    this._route.params.subscribe(params => {
      this.iceandfire.getCharacterDetails(params['characterId'])
        .subscribe( data=>{
                  this.characterDetails = data;  
                  //console.log(this.characterDetails);   
            },
            error=>{
            console.log("some error occured");
            console.log(error.errorMessage); 
        })
    })

    this.allCharacters = this.iceandfire.getCharacters(this.charactersUrl).subscribe(
      data=>{
            this.allCharacters = data;  
            this.allCharacters = Array.of(this.allCharacters);   
            //console.log(this.allCharacters);   
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
