/**
 * 类型断言
 */

let x:any='i am jack'
/**
 * 上面x可能是任何类型，编译器可能不知道x到底属于什么类型变量
 * 这是通过<string>表示把x断言成字符串类型，就是告诉编译器要把x当成字符串处理，
 * 这是就可以调用字符串处理函数substring了
 */
let s=(<string>x).substring(0,3)
console.log(s)