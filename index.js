
function yourScore(){
    // alert("Good work")

    var quiz1=document.myForm.q1.value;
    var quiz2=document.myForm.q2.value;
    var quiz3=document.myForm.q3.value;
    var quiz4=document.myForm.q4.value;
    var quiz5=document.myForm.q4.value;
    var result= 0;

  var displayForm=document.getElementById("displayForm")
  var display=document.getElementById("display")
  display.style.display="visible"


    if(quiz1=="D"){ result++ }
    if(quiz2=="A"){ result++ }
    if(quiz3=="A"){ result++ }
    if(quiz4=="A"){ result++ }
    if(quiz5=="B"){ result++ }


    if(quiz1=="" || quiz2=="" || quiz3=="" || quiz4=="" || quiz5=="" ){
        alert("Please Answer All the questions")
    }
    var finalScore= result*20;
    if( finalScore>=80){
        displayForm.innerHTML= "Your Score is " + finalScore + "%" + "Excellent"

    }
    else if( finalScore>=60 && finalScore<80){
        displayForm.innerHTML= "Your Score is " + finalScore + "%" + "Fairly Doone"

    }
    else if ( finalScore>=40 && finalScore<60){
        displayForm.innerHTML="Your Score is " + finalScore + "%" + "Not Bad"

    }
    else if ( finalScore>=0 && finalScore<40){
        displayForm.innerHTML="Your Score is " + finalScore + "%" + "Try Again!"

    }
    
    function newComments(){
        var viewComments=document.getElementById("viewComments")
        // viewComments.innerHTML="It is here"
        alert("Hi")
     }

}

