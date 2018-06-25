import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//manually imported packages
import {HttpClientModule} from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router'; 
import { FormsModule }   from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { IceandfireService } from './iceandfire.service';
import { DataNamesPipe } from './data-names.pipe';
import { BookComponent } from './book/book.component';
import { CharacterComponent } from './character/character.component';
import { HouseComponent } from './house/house.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotfoundComponent,
    DataNamesPipe,
    BookComponent,
    CharacterComponent,
    HouseComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    OrderModule,

        // we can add as many as possible routes here
        RouterModule.forRoot([
         
          {path:'',redirectTo:'/home',pathMatch:'full'},
          {path:'home',component:HomeComponent},
          {path:'about',component:AboutComponent},  
          {path:'book/:bookId',component:BookComponent},
          {path:'character/:characterId',component:CharacterComponent},
          {path:'house/:houseId',component:HouseComponent},       
          {path:'**',component:NotfoundComponent}
        ])
  ],
  providers: [
    IceandfireService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
