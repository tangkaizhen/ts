/**
 * 类型断言
 */

interface Person{
    name:string
    age:number
    first_name:string
}
// 第二种断言的方式,这时候如果不加as断言，编译不通过
let per={} as Person
per.name='jack'
per.age=12
per.first_name='tome'