// //
// //  const previousBtn = document.getElementById("previousBtn");
// //  const nextBtn = document.getElementById("nextBtn");
// //  const finishBtn = document.getElementById("finishBtn");
// //  const content = document.getElementById("content");
// // const circle = [...document.querySelectorAll(".circle")];
// //
// //  const MAX_STEPS = 5;
// // let currentStep = 1;
// //
// // document.getElementById("nextBtn").addEventListener("click", function () {
// //   const currentCircle = circle[currentStep - 1];
// //   currentCircle.classList.add("completed");
// //   currentStep++;
// //    if( currentStep === MAX_STEPS){
// //     previousBtn.disable = false;
// //       nextBtn.disabled = true;
// //       finishBtn.disabled = false;
// //   }
// // });
// //
// // document.getElementById('previousBtn').addEventListener('click', function () {
// //  	const previousBullet = bullets[currentStep  -  2];
// //    previousBullet.classList.remove('completed');
// //  	currentStep--;
// //  	nextBtn.disabled  =  false;
// //  	finishBtn.disabled  =  true;
// //  	if  (currentStep  ===  1)  {
// //  		previousBtn.disabled  =  true;
// //  	}
// //  });
// //
// //  finishBtn.addEventListener('click', function () {
// //  	location.reload();
// //  });
//
// var survey_options = document.getElementById('survey_options');
// var add_benef = document.getElementById('add_benef');
// var remove_fields = document.getElementById('remove_fields');
//
// add_benef.onclick = function(){
//   var newField = document.createElement('input');
//
//   newField.setAttribute('class','input-details-2');
//   survey_options.append(newField);
// }
var counter = 1;

function add_more_field() {
  counter+=1
  html = < div class = "row" id="row'+countre+'">
    <
    div class = "col-25" >
    <
    label
  for = "" > Full Name < /label> < /
    div > <
    div class = "col-75" >
    <
    input class = "input-details-2"
  type = "text"
  name = "'+countre+'"
  value = "" >
    <
    /div> < /
    div >

    <
    div class = "row" >
    <
    div class = "col-25" >
    <
    label
  for = "" > Address < /label> < /
    div > <
    div class = "col-75" >
    <
    input class = "input-details-2"
  type = "text"
  name = "'+countre+'"
  value = "" >
    <
    /div> < /
    div >

    <
    div class = "row" >
    <
    div class = "col-25" >
    <
    label
  for = "" > Phone < /label> < /
    div > <
    div class = "col-75" >
    <
    input class = "input-details-2"
  type = "text"
  name = "'+countre+'"
  value = "" >
    <
    /div> < /
    div > <
    div class = "row" >
    <
    div class = "col-25" >
    <
    label
  for = "" > Email < /label> < /
    div > <
    div class = "col-75" >
    <
    input class = "input-details-2"
  type = "text"
  name = "'+countre+'"
  value = "" >
    <
    /div> < /
    div >

    <
    div class = "row" >
    <
    div class = "col-25" >
    <
    label
  for = "" > Values < /label> < /
    div > <
    div class = "col-75" >
    <
    input class = "input-details-2"
  type = "text"
  name = "'+countre+'"
  value = "" >
    <
    /div> < /
    div > <
    /div> < /
    div >
}

var form= document.getElementById('product_form')
form.innerHTML+=html
