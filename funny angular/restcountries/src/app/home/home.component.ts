import { Component, OnInit, OnDestroy } from '@angular/core';
import { RestCountriesService } from '../rest-countries.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public allDataUrl = 'all';

  public allData:any;

  public allRegions:any=[];
  
  public regionNames:any={};
 

  constructor(public restCountries:RestCountriesService, private spinner: NgxSpinnerService) { }

  ngOnInit()
  {
    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 3 seconds */
        this.spinner.hide();
    }, 3000);

    this.restCountries.getRegions(this.allDataUrl).subscribe(
      data=>{
       
      this.allData = data;

      for (const singleData of this.allData) {

        let region = singleData.region;

        if(region!=="" && region!==undefined && region!=null)
        {
          if (!(region in this.regionNames))
          {
            this.regionNames[region] = 1;
  
            let countriesCount = get_number_of_countries(region,this.allData);
            
            this.allRegions.push({regionName:region,countriesCount:countriesCount});
          }
        }
      }

      function get_number_of_countries(region,data)
      {
        let count = 0;

        for(const singleData of data)
        {
          if(region === singleData.region)
          {
            if(singleData.name!=="" && singleData.name!==undefined && singleData.name!==null)
            {
              count++;
            }
          }
        }

        return count;
      }

      console.log(this.allRegions);
      
      

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
