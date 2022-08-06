//Homework 2

//Task 1

let sampleObject = {
  isItarable : false,
  sampleArray : [12,63,21,34,98,57]
}


function It (arr){
  if(sampleObject.isItarable==1){
    return (sampleObject);
  } else{
    return ("provided array isn't itarable");
    }
}

let It1 = It (sampleObject);
 console.log(It1);


 //Task 2 

 function checkPythagoras (x, y, z){

  if(x*x+y*y==z*z || z*z+ y*y==x*x || y*y == z*z+x*x){
    return true;
  } else{
    return false;
  }

  }

  let checkPythagoras1 = checkPythagoras (7, 24, 25);
  console.log (checkPythagoras1);
 

  //Task 3

  - infinite
  + infinite
  function minMax(arr){
    

  }



//Task 4

function angle1 (deg){
  if (deg >0 && deg <90){
    return "Acute angle";
   
  } else if(deg === 90){
    return "Right angle";
  } else if (deg > 90 && deg <180){
    return "Obtuse angle";
  } else (deg==180)
  {
    return "Straight angle";
  }
}
  let angleDeg = angle1(30);
  console.log (angleDeg);

  //Task 5

function checkStudentGrade(obj){
  person={
    name:"student1",
    grade : 91,


  }

}
  
 