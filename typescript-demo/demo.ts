/**
 * 继承，多态
 */

class Person{
    firstName:string
    lastName:string
 }

 class Programmer extends Person{

 }

 let p=new Programmer()
 p.firstName='jack'
 p.lastName='chen'
 console.log(p)

