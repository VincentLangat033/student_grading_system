
function yourScore(){
    // alert("Good work")

  var quiz1=document.myForm.q1.value;
  var quiz2=document.myForm.q2.value;
  var quiz3=document.myForm.q3.value;
  var quiz4=document.myForm.q4.value;
  var quiz5=document.myForm.q4.value;
  var result= 0;

  if(quiz1=="D"){ result++ }
  if(quiz2=="A"){ result++ }
  if(quiz3=="A"){ result++ }
  if(quiz4=="A"){ result++ }
  if(quiz5=="B"){ result++ }

  var finalScore= result*20;

    if(quiz1=="" || quiz2=="" || quiz3=="" || quiz4=="" || quiz5=="" ){
        alert("Please Answer All the questions")
    }
    
    if( finalScore>=80){
        displayForm.innerHTML= "Your Score is " + finalScore + "%" + "   "  + "Excellent"

    }
    else if( finalScore>=60 && finalScore<80){
        displayForm.innerHTML= "Your Score is " + finalScore + "%" + "  " 

    }
    else if ( finalScore>=40 && finalScore<60){
        displayForm.innerHTML="Your Score is " + finalScore + "%"  + "  " 

    }
    else if ( finalScore>=0 && finalScore<40){
        displayForm.innerHTML="Your Score is " + finalScore + "%"   + "  " 

    }
  

}
function newComments(){
    
    var displayComments=document.getElementById("viewComments")
    displayComments.innerHTML="Thank you for taking your time to attempt this questions"

    // if( finalScore>=80){
    //     displayComments.innerHTML= "Excellent"

    // }
    // else if( finalScore>=60 && finalScore<80){
    //     displayComments.innerHTML=   + "Fairly Done"

    // }
    // else if ( finalScore>=40 && finalScore<60){
    //     displayComments.innerHTML= "Not Bad"

    // }
    // else if ( finalScore>=0 && finalScore<40){
    //     displayComments.innerHTML= "Try Again!"

    // }
}

 function clearSect(){
     document.getElementById('quizForm').reset();

 }