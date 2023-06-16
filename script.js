const display=document.querySelector('input');
const btn=document.querySelectorAll('td');
//console.log(display,btn);
 

for(let button of btn){
    button.addEventListener('click',(e)=>{
        let t=e.target.innerText;
        if(t==='c'){
            display.value='';
        }
        else if(t==='×'){
            display.value+='*';
        }
        else if(t==='='){
            try{
                display.value=eval(display.value);
            }
            catch(error){
                display.value='Error!';
            }
        }
        else{
            display.value+=t;
        }
    })
}