interface PrintCallback{
    //  匿名函數
     (success:boolean):void
}
interface Person{
    //只读
    readonly first_name:string
    // 可选
    last_name?:string
    print(callback:PrintCallback):void
}
/**
 * 即使pCallback的类型定义为接口PrintCallback，其参数也可以为空
 * 如果pCallback写了参数，只要参数类型和函数返回类型遵从PrintCallback即可，即使参数名字不一样也是可以的
 */
let pCallback:PrintCallback=(suc:boolean)=>{
    console.log("callback",suc)
}
let pe:Person={
    first_name:'tome',
    print:(callback:PrintCallback):void=>{
        callback(true)
    }
}
pe.print(pCallback)

//=============================
/**
 * 类型断言
 */
let x:any='i am jack'
/**
 * 上面x可能是任何类型，编译器可能不知道x到底属于什么类型变量
 * 这时通过<string>表示把x断言成字符串类型，就是告诉编译器要把x当成字符串处理，有点类似强制类型转换
 * 这是就可以调用字符串处理函数substring了
 */
let s=(<string>x).substring(0,3)

interface Person1{
    name:string
    age:number
    first_name1:string
}
// 第二种断言的方式,这时候如果不加as断言，编译不通过
let per={} as Person1
per.name='jack'
per.age=12
per.first_name1='tome'

//=============================
// 接口可以继承其他接口,类可以继承一个单独的类，但是可以实现多个接口
interface Person3{
    name:string
}
interface Programmer extends Person3{
    age:number
}
let p:Programmer={
    name:'jack',
    age:12
}
// 如果一个类实现一个接口，必须要实现接口中的所有的属性和方法
class P implements Person3{
    name:string
    constructor(name:string){
        this.name=name
    }    
}