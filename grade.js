
let English = document.getElementById('eng');
let Bangla  = document.getElementById('ban');
let Math    = document.getElementById('math'); 
let result  = document.getElementById('output');
let button = document.getElementById('btn'); 

button.addEventListener('click',(e)=>{

      e.preventDefault()

      let totalMarks1 = (parseInt(English.value));
 

      let totalMarks2 = (parseInt(Bangla.value));
 

      let totalMarks3 = (parseInt(Math.value));
 
      let totalMarks = totalMarks1 + totalMarks2 + totalMarks3; 
      alert(totalMarks);


      let percentage = (totalMarks)/3;
      alert(percentage);
 
 
      if(percentage<=100 && percentage>=89){
          result.innerHTML = `Out of total 300 your total mark is ${totalMarks}.Your percentage is ${percentage}% and  your grade is A+`;
  
      }
      else if(percentage<=88 && percentage>=80 ){
       
          result.innerHTML =  `Out of total 300 your total mark is ${totalMarks}.Your percentage is ${percentage}% and your grade is A`;
      }
      else if(percentage<=79 && percentage>=75){
          result.innerHTML =  `Out of total 300 your total mark is ${totalMarks}.Your percentage is ${percentage}% and your grade is B+`;
       }
      else if(percentage<=74 && percentage>=65){
          result.innerHTML =  `Out of total 300 your total mark is ${totalMarks},Your percentage is ${percentage}% and your grade is C+`;
       }
       else if(percentage<=64 && percentage>=49){
           result.innerHTML = `Out of total 300 your total mark is ${totalMarks},Your percentage is ${percentage}% and your grade is D+`;
       }
       else{
           result.innerHTML = `Out of total 300 your total mark is ${totalMarks},Your percentage is ${percentage}% and your grade is F ): Better luck next time`;
       }

     });
    