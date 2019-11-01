/**
 * 类型别名
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
