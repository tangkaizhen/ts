/**
 * var let区别:
 * 1,作用域不同
 * 2，var可以重复定义同名字的变量，但是let不可以重复定义同名字的变量
 */

if(true){
    var a=10;
    let b=11;
}
console.log(a)
// 在if语句之外，可以取值a，但是不可以取值b，因为var是函数级别变量，let是区域级别的，以后定义变量尽量使用let定义






