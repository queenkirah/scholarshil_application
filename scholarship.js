let firstName=document.getElementById("firstName");
let lastName=document.getElementById("lastName");
//let DOB=document.getElementById("dateOfBirth");
let age=document.getElementById("age");
let gender=document.getElementById("gender");
let phoneNumber=document.getElementById("phoneNumber");
let school=document.getElementById("school");
let country=document.getElementById("country");
let subject1=document.getElementById("subject1");
let subject2=document.getElementById("subject2");
let subject3=document.getElementById("subject3");
let subject4=document.getElementById("subject4");
let subject5=document.getElementById("subject5");
let subject6=document.getElementById("subject6");
let subject7=document.getElementById("subject7");
let subject8=document.getElementById("subject8");
let course1=document.getElementById("course1")
let course2=document.getElementById("course2")
let course3=document.getElementById("course3")
let course4=document.getElementById("course4")
let course5=document.getElementById("course5")
let course6=document.getElementById("course6")
let course7=document.getElementById("course7")
let course8=document.getElementById("course8")
let error = document.getElementById("error");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2")
let error3 = document.getElementById("error3");
let error4 = document.getElementById("error4");
let error5 = document.getElementById("error5");
let error6 = document.getElementById("error6");
let error7 = document.getElementById("error7");
let error8 = document.getElementById("error8");
let error9 = document.getElementById("error9");
let error10 = document.getElementById("error10");
let error11 = document.getElementById("error11");
let error12 = document.getElementById("error12");
let error13 = document.getElementById("error13");
let error14 = document.getElementById("error14");
let error15 = document.getElementById("error15");
let submitBtn=document.getElementById("submitBtn");
let showResults=document.getElementById("showResults");
let result = document.querySelectorAll(".result");
//let btn2 = document.getElementById('showResults')
let agePoint=100;
let ageValue;
let courseValue;
let coursePoint;
let countryPoint;
let courseArry=[]
let courseSum;
let allPoint;
 
error.style.color = 'red'
error1.style.color = 'red'
//error2.style.color = 'red'
error3.style.color = 'red'
error4.style.color = 'red'
error5.style.color = 'red'
error6.style.color = 'red'
error7.style.color = 'red'
error8.style.color = 'red'
error9.style.color = 'red'
error10.style.color = 'red'
error11.style.color = 'red'
error12.style.color = 'red'
error13.style.color = 'red'
error14.style.color = 'red'
error15.style.color ='red'

submitBtn.addEventListener('click',  function(){
    //call the valiation function
    validateForm()

})



function validateForm() {
    if(firstName.value == "") {
        error.innerHTML = "first Name is required";
    }
    else if(lastName.value == "") {
        error1.innerHTML = "last name is required";
    }
   else if(age.value == "") {
        error3.innerHTML = "age is required";
        
    }
    else if(gender.value == "") {
        error4.innerHTML = "required";

    
    } else if(phoneNumber.value == "") {
        error5.innerHTML = "required";
    }

    else if(school.value == "") {
        error6.innerHTML = "required";
    }

   else if(country.value == "") {
        error7.innerHTML = "required";
    }
    else if(subject1.value == "") {
        error8.innerHTML = "required";
    }
    
    else if(subject2.value == "") {
        error9.innerHTML = "required";
    }
    
    else if(subject3.value == "") {
        error10.innerHTML = "required";
    }
    
    else if(subject4.value == "") {
        error11.innerHTML = "required";
    }
    
    else if(subject5.value == "") {
        error12.innerHTML = "required";
    }
    
    else if(subject6.value == "") {
        error13.innerHTML = "required";
    }
    
    else if(subject7.value == "") {
        error14.innerHTML = "required";
    }
    
   else if(subject8.value == "") {
        error15.innerHTML = "required";
    }else{

        validatePoints()
    }
    
       clearErrors()
    
}

function clearErrors() {
    if(firstName.value != "") {
        error.innerHTML = "";
    }
}


function validatAge() {
    if(age.value == 0){
        agePoint=100
    }
    if(age.value == 1) {
        agePoint=80
    }
     if(age.value == 2) {
        agePoint=50
    }
    if(age.value == 3) {
        agePoint=30
    }
     if(age.value == 4) {
        agePoint=10
    }
    else{
       console.log(agePoint)
    }
}

//btn2.addEventListener('click', function () {


function validateScore(){
    courseArry=[course1.value,course2.value,course3.value,course4.value,course5.value,course6.value,course7.value,course8.value]
    courseSum = parseFloat(course1.value) + parseFloat(course2.value) + parseFloat(course3.value) + parseFloat(course4.value) + parseFloat(course5.value) + parseFloat(course6.value) + parseFloat(course7.value) + parseFloat(course8.value)
    
    courseValue=courseSum/courseArry.length 
    console.log(courseArry.length)
    console.log(courseSum)


    // if(courseValue > 100 ){
    //     coursePoint= "invalid";
    // }

    if(courseValue >= 90 && courseValue <= 100 ){
        coursePoint=150;
    }
    if(courseValue >= 85 && courseValue <= 89 ){
        coursePoint=140;
    } 
    if(courseValue >= 75 && courseValue <= 84){
        coursePoint=120;
    } 
    if (courseValue >= 65 && courseValue <= 74){
        coursePoint=100;
    }
    if (courseValue >= 60 && courseValue <= 64){
        coursePoint=80;
    }
    if (courseValue >= 50 && courseValue <= 59){
        coursePoint=50;
    }
    if (courseValue >= 40 && courseValue <= 49){
        coursePoint=20;
    }
    if (courseValue <= 39){
        coursePoint=0;
    }
    else{
        console.log(coursePoint)
     }
}





function validatecountryPoint() {
    if(country.value == "northamerica") {
        countryPoint=20
    }
    if(country.value == "africa") {
        countryPoint=50
    }
    if(country.value =="asia") {
        countryPoint=40
    }
    if(country.value == "southamerica") {
        countryPoint=30
    }
    if(country.value == "othercountry") {
        countryPoint=10
    }
    else{
        console.log(countryPoint)
    }
}

function validatePoints(){
    validatAge()
    validateScore()
    validatecountryPoint()

    allPoint=agePoint + countryPoint + coursePoint
        console.log(allPoint)

    if (allPoint >= 180) {
        document.getElementById('result').innerHTML = ('Congratulations You have been awarded the Scholarship to University of BRISTOL');
       } else {
         document.getElementById('result').innerHTML = ('Try again');
       }
       chart()
}

    


function chart(){
  const labels = [
    'AGE',
    'COUNTRY',
    'GRADE',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: ['rgb(255, 99, 132)'],
      borderColor: 'rgb(255, 99, 132)',
      data: [agePoint, countryPoint, coursePoint,],
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };
  
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );


}
