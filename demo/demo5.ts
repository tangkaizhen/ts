/**
 * 联合类型
 */

 class Bike {
     start(){
         console.log('Bike start')
     }
     drive(){
         console.log('Bike drive')
     }
 }
 class Car {
     start(){
         console.log('Car start')
     }
     ride(){
         console.log('Car ride')
     }
 }
 let move=(v:Bike|Car):void=>{
    if((v as Bike).drive){
        (v as Bike).drive()
    }else{
        (v as Car).ride()
    }
 }

 let move1=(v:Bike|Car):void=>{
    if(v instanceof Car){
        v.ride()
    }else{
        v.drive()
    }
 }

move(new Bike())