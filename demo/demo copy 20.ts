/**
 * 在ts中，接口是可以继承某个类的
 */

// 如何用ts描述下面的列表结构 
[
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere",
        "body": "quia et suscipit"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum temporepossimus qui neque nisi nulla"
    }
] 
// 可以先定义一个接口
interface todoList{
    userId:number
    id:number
    title:string
    body:string
}   
let arr:todoList[]=[
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere",
        "body": "quia et suscipit"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum temporepossimus qui neque nisi nulla"
    }
] 
   

