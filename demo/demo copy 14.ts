/**
 * 可选属性
 * 
 */

interface Person{
    first_name:string
    last_name?:string
}
let p={
    first_name:'Tome',
    last_name:'Jack'
}
const sayName=(o:Person)=>{
    console.log(o.first_name)
}
sayName(p)
