/**
 * 
 */

interface Person{
    readonly first_name:string
    last_name?:string
}
 class Programmer implements Person{
     first_name:string='jack'
 }
 let p:Programmer=new Programmer()
 console.log(p.first_name)