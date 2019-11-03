/**
 */

let splitInHalf=(str:string | null):string=>{
    let checkString=()=>{
        if(str === null||str===undefined){
            str="test"
        }
    }
    checkString();
    return (str as String).substring(0,(str as String).length/2)
}
console.log(splitInHalf('hello'))
