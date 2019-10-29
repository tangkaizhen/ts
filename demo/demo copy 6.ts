/**
 * 类
 * 
 */

 class Person{
    constructor(fn:string,ln:string){
        this.firstName=fn
        this.lastName=ln
    }
    firstName:string;
    lastName:string;

 }

 let p=new Person('唐','凯震');
console.log(p)