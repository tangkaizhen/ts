/**
 * 
 */

class Rectangle {
    private w:number
    private h:number
    constructor(w:number,h:number) {
        this.w=w
        this.h=h
    }
    getAreaFn():Function{
        return ()=>{
            console.log(this.w * this.h)
        }
    }    
}    
let r:Rectangle=new Rectangle(2,4)
r.getAreaFn()()