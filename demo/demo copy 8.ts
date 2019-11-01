/**
 * 继承，多态
 */

class Person{
    firstName:string='唐'
    lastName:string='凯震'
    protected constructor(firstName:string,lastName:string){
        this.firstName=firstName
        this.lastName=lastName
    }
 } 

 class Programmer extends Person{
    constructor(firstName:string,lastName:string){
        super(firstName,lastName)
    }
 }

 var p=new Programmer('李','峰');
 console.log(p.firstName) 
