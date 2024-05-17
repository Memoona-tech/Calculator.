let input= document.getElementById('input');
let buttons = document.querySelectorAll('button');

let string="";

let arr = Array.from(buttons);
arr.forEach (button => {
    button.addEventListener('click',(e)=> {
      const  buttonValue= e.target.innerHTML;
             if(e.target.innerHTML == '=')
                {
                      string = eval(string);
                      input.value = string;
                }
            else if(e.target.innerHTML == 'AC'){
                string="";
                input.value= string;
                                               }  
            else if(e.target.innerHTML =='DEL' ){
                string =string.substring(0, string.length-1);
                input.value = string;
            }  

              else{
            string += e.target.innerHTML;
                input.value = string;
              
                    }
     } )
})
   
function Squareroot(){
    const number=  document.getElementById('input').value;
     if(number<1){
        console.log("Math Error");
     }
     string= number**0.5;
    // stringR= string.substring(0,string.length-1);
  //   input.value=stringR;
     console.log(string);
   
}