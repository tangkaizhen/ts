/**
 * 只读
 */
interface Person{
    readonly first_name:string
    last_name?:string
}
 class Programmer implements Person{
     first_name:string='jack'
 }
 let p:Programmer=new Programmer()
 p.first_name='tome'
