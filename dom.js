function increment()
{
    const a=document.querySelector('h2')
    const b=Number(a.innerText)
    const c=b+1;
    a.innerText=c
    if(c%5 ==0 && c!=0){
        a.style.color="brown"
    }
    else{
            a.style.color=""
    }
}
function decrement()
{
    const a=document.querySelector('h2')
    const b=Number(a.innerText)
    const c=b-1;
    a.innerText=c
    if(c%5 ==0 && c!=0){
        a.style.color="brown"
    }
    else{
        a.style.color=""
    }
}