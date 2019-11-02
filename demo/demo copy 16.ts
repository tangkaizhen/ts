/**
 * 只读
 */
interface PrintCallback{
    //  匿名函數
     (success:boolean):void
}
interface Person{
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