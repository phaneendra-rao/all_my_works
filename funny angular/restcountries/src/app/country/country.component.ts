import { Component, OnInit , OnDestroy } from '@angular/core';

//importing route related packages
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { RestCountriesService } from '../rest-countries.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [Location]
})
export class CountryComponent implements OnInit, OnDestroy {

  public singleCountry:any;

  constructor(private _route: ActivatedRoute, private router: Router, private location:Location, public restCountries:RestCountriesService, private spinner: NgxSpinnerService) { }

  ngOnInit() {

    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 3 seconds */
        this.spinner.hide();
    }, 3000);

    this._route.params.subscribe(params => {
      this.restCountries.getSingleCountry(params['countryName'])
        .subscribe( data=>{          
          
                  this.singleCountry = data;  
                  console.log(this.singleCountry);
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
