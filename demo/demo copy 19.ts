/**
 * 
 */

// 接口可以继承其他接口,类可以继承一个单独的类，但是可以实现多个接口
interface Person{
    name:string
}
interface Programmer extends Person{
    age:number
}
let p:Programmer={
    name:'jack',
    age:12
}
// 如果一个类实现一个接口，必须要实现接口中的所有的属性和方法
class P implements Person{
    name:string
    constructor(name:string){
        this.name=name
    }    
}