/**
 * var let区别:
 * 1,作用域不同
 * 2，var可以重复定义同名字的变量，但是let不可以重复定义同名字的变量
 */

if(true){
    var a=10;
    let b=11;
}

// 在if语句之外，可以取值a，但是不可以取值b，因为var是函数级别变量，let是区域级别的，以后定义变量尽量使用let定义
let x2:any;
x2 = '珠峰'
x2 = 12

/**
 * 定义数组有两种方法：
 * 
 */
let myArr1:string[]=["st1","st2"]
let myArr2:Array<string>=["st1","st2","st3"]

/**
 * 元祖是一种特殊的数组，个数和类型都是固定
 */
let myArr3:[string,number]=["st1",1]

// 第三个number表示返回值类型
const add=(a:number,b:number):number=>{
    return a+b
}

/**
 * 类
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

 /**
 * 静态属性和静态方法
 */
class Person1{
    static firstName:string='唐'
    static lastName:string='凯震'
    private constructor(firstName:string,lastName:string){
        Person1.firstName=firstName
        Person1.lastName=lastName
    }
    static getFullName(){
        return `${Person1.firstName} ${Person1.lastName}`
    }
 } 

 /**
 * 枚举
 */
// 注意枚举表现在页面是字符串形式，但是其值是数字类型，好比下面 Week.SUN==0
enum Week{
    SUN,MON,TUE,WED,THU,FRI,SAT
}
let day:Week=Week.MON







