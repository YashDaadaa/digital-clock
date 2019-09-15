console.log('time')

let fun = function(){
    let d = new Date();
    let a = document.getElementById('showtime')
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
     m = timecheck(m);
     s = timecheck(s);
    a.innerHTML = h +":"+m+":"+s
    let t = setTimeout(fun,1000)
    
}
let timecheck = function(i)
{
    
    if( i < 10)
    
    i = '0'+ i;
    
     return i;
 }
