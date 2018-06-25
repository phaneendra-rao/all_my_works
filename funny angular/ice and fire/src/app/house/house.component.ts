import { Component, OnInit, OnDestroy } from '@angular/core';

//importing route related packages
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { IceandfireService } from '../iceandfire.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],
  providers: [Location]
})
export class HouseComponent implements OnInit, OnDestroy {

  public houseDetails:any;
  public allHouses;
  public housesUrl = "https://www.anapioficeandfire.com/api/houses";

  constructor(private _route: ActivatedRoute, private router: Router, private location:Location, public iceandfire:IceandfireService) { }

  ngOnInit() {

    // let houseId = this._route.snapshot.paramMap.get('houseId');
    // //console.log(myBlogId);

    // this.houseDetails = this.iceandfire.getHouseDetails(houseId).subscribe(
    //   data=>{
    //         this.houseDetails = data;  
    //         console.log(this.houseDetails);   
    //   },
    //   error=>{
    //   console.log("some error occured");
    //   console.log(error.errorMessage);    
    // });

    this._route.params.subscribe(params => {
      this.iceandfire.getHouseDetails(params['houseId'])
        .subscribe( data=>{
                  this.houseDetails = data;  
                  //console.log(this.houseDetails);   
            },
            error=>{
            console.log("some error occured");
            console.log(error.errorMessage); 
        })
    })


    this.allHouses = this.iceandfire.getBooks(this.housesUrl).subscribe(
      data=>{
            this.allHouses = data;
            this.allHouses = Array.of(this.allHouses);   
            //console.log(this.allHouses);   
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
