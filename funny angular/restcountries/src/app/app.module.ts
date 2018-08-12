import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { RestCountriesService } from './rest-countries.service';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountriesComponent,
    CountryComponent,
    NotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    // we can add as many as possible routes here
    RouterModule.forRoot([
         
      {path:'',redirectTo:'/home',pathMatch:'full'},
      {path:'home',component:HomeComponent},
      {path:'about',component:AboutComponent},
      {path:'countries/:regionName',component:CountriesComponent},
      {path:'countries/language/:languageCode',pathMatch: 'full',component:CountriesComponent},
      {path:'countries/currency/:currencyCode',pathMatch: 'full',component:CountriesComponent},
      {path:'country/:countryName',component:CountryComponent},      
      {path:'**',component:NotFoundComponent}
    ])
  ],
  providers: [RestCountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
