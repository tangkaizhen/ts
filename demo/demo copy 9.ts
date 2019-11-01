/**
 * 静态属性和静态方法
 */

class Person{
    static firstName:string='唐'
    static lastName:string='凯震'
    private constructor(firstName:string,lastName:string){
        Person.firstName=firstName
        Person.lastName=lastName
    }

    static getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
 } 


 console.log(Person.getFullName()) 
