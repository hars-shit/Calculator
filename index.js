let input=document.getElementById('input');
let number=document.querySelectorAll('button');
let inputValue='';


Array.from(number).forEach(item=>{
    item.addEventListener('click',(e)=>{
       buttonText=e.target.innerText;
       console.log(buttonText);
        if(buttonText=='AC'){
            inputValue="";
            input.value=inputValue;
        }
        else if(buttonText=='='){
            input.value=eval(inputValue);
            console.log(input.value);
        }

       else{
        inputValue +=buttonText;
           input.value=inputValue;
           console.log(input.value);
       }
        
})
             
}) 


