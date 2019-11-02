/**
 * 抽象类 abstract
 * 抽象类或者接口均是不能实例化的，除非继承或者实现它的子类才可以实例化
 * 继承抽象类的子类必须要实现抽象类中的抽象方法
 */
abstract class Person {
    constructor(name:string) {
        this.name=name
    }
    name:string
    display():void{
        console.log(this.name)
    }
    // 下面是抽象类区别于类的关键,定义一个抽象方法，注意抽象方法是没有方法体的
    abstract find(str:string):void
}
class Programmer extends Person{
    
    age:number
    constructor(name:string,age:number) {
        super(name)//super是必须调用
        this.age=age
    }
    // 子类必须要实现抽象类的抽象方法
    find(str: string): void {
        console.log(str)
    }
}

let p:Programmer=new Programmer('jack',22)
p.find('tome')