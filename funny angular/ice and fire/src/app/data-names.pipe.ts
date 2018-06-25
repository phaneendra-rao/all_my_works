import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataNames',
  pure: false
})
export class DataNamesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      
    console.log(args);
    
    if(!args)
    {
      return value;
    }
    else
    {
      
      return value.filter(data=>{

       return data.name.toLowerCase().indexOf(args.toLowerCase()) !== -1
       
      });
     
    }
    // return Array;
    
  }

}
