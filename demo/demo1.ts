/**
 * 接口
 */
interface INamed{
    name:string
    print():void
}
const sayName=(o:INamed)=>{
    o.print()
}
const person={
    age:27,
    name:'jack',
    print:function(){
        console.log(this.name)
    }
}
sayName(person)

//==========================
/**
 * 类实现接口
 */
interface Person{
    name:string
    greeting():void
}
//  类实现接口，一个接口可以供多个类实现
class Employee implements Person{
   name:string='Jack';
   greeting():void {
       console.log('我是一个employee')
   };
}
let em:Employee=new Employee()
em.greeting()

//==========================
/**
 * 只读属性
 */
interface Person1{
    readonly first_name:string
    //可选属性
    last_name?:string
}
 class Programmer implements Person1{
     first_name:string='jack'
 }
 let p:Programmer=new Programmer()
 console.log(p.first_name)


 //==========================
interface Person2{
    first_name:string
    last_name?:string
}
let p1={
    first_name:'Tome',
    last_name:'Jack'
}
const sayName1=(o:Person2)=>{
    console.log(o.first_name)
}
sayName1(p1)