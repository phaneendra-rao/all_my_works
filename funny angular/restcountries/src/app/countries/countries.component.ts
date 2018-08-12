import { Component, OnInit, OnDestroy } from '@angular/core';

//importing route related packages
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { RestCountriesService } from '../rest-countries.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  providers: [Location]
})
export class CountriesComponent implements OnInit, OnDestroy {

  public regionCountries:any=[];

  constructor(private _route: ActivatedRoute, private router: Router, private location:Location, public restCountries:RestCountriesService, private spinner: NgxSpinnerService) { }

  ngOnInit() {

    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 3 seconds */
        this.spinner.hide();
    }, 3000);

    this._route.params.subscribe(params => {

      let regionName = this._route.snapshot.paramMap.get('regionName');

      this.regionCountries=[];

      this.restCountries.getRegionCountries(regionName)
        .subscribe( data=>{           
                  
                  this.regionCountries.push(regionName,data);  
                  console.log(this.regionCountries);
            },
            error=>{
            console.log("some error occured");
            console.log(error.errorMessage); 
        })
    });

    

    this._route.params.subscribe(params => {

      let languageCode = this._route.snapshot.paramMap.get('languageCode');

      this.regionCountries=[];

      this.restCountries.getLanguageCountries(languageCode)
        .subscribe( data=>{           
          
          this.regionCountries.push(languageCode,data);  
                  console.log(this.regionCountries);
            },
            error=>{
            console.log("some error occured");
            console.log(error.errorMessage); 
        })
    });

    this._route.params.subscribe(params => {

      let currencyCode = this._route.snapshot.paramMap.get('currencyCode');

      this.regionCountries=[];

      this.restCountries.getCurrencyCountries(currencyCode)
        .subscribe( data=>{           
          
          this.regionCountries.push(currencyCode,data);  
                  console.log(this.regionCountries);
            },
            error=>{
            console.log("some error occured");
            console.log(error.errorMessage); 
        })
    });

  }

  public goBackToPreviousPage(): any {
    this.location.back();
  }

  ngOnDestroy(){

  }

}
