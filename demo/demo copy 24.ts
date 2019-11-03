/**
 * 联合类型
 */
let show=(x:number | string):void=>{
    // typeof来判断类型
    if(typeof x=='number'){
        console.log(`x 是 number`)
    }else{
        console.log(`x 是 string`)
    }
}
show(111)
show("111")
