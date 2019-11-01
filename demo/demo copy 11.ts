/**
 * 接口
 */

interface INamed{
    name:string
    print():void
}
const sayName=(o:INamed)=>{
    o.print()
}

const person={
    age:27,
    name:'jack',
    print:function(){
        console.log(this.name)
    }
}

sayName(person)