/**
 * 
 */

 //第一种方法
 let d:(param:string)=>string
 d=function(pa:string):string{
    return pa
 }
 console.log(d('tome'))
//  第二种，用接口方法
interface Fn{
    (param:string):string
}
let f:Fn=(pa:string):string=>pa
