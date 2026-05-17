


let formData = document.querySelector(".form");

let submitBtn = document.querySelector(".button");


let firstName , lastName , email, password ;

let field ;



let fnTarget , lnTarget , emailTarget , pwdTarget;

let errorMessages = document.querySelectorAll(".error-message");


for (let errorMessage of errorMessages) {
    errorMessage.classList.add("d-none");
    
}


let emptyfieldMessages = document.querySelectorAll(".empty-field");

for(let  emptyfieldMessage of emptyfieldMessages )
{
emptyfieldMessage.classList.add("d-none")


}

formData.addEventListener("keyup" , (e)=>{
e.preventDefault();
// console.log(e.target);
console.log(e.target.dataset.key);

field = e.target.dataset.key;


switch(field){


case "firstName" : 
firstName = e.target.value;
fnTarget = e.target;

// console.log(firstName);

break;


case "lastName"  :
    
    lastName = e.target.value;
    // console.log(lastName);
    lnTarget = e.target;

break;

case "email" :
    email = e.target.value;
    emailTarget = e.target;
    break;


    case "password" :
        password = e.target.value;
        pwdTarget = e.target;

break;







}
// console.log(field);









}
)





let nameRegex = /^[a-z]+$/i;
let emailRegex  = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ ;

let passwordRegex = /^(?=.*\d)(?=.*[!@#%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

let fnFlag , lnFlag , eFlag ,pwdFlag;


submitBtn.addEventListener("click", (e)=>{

e.preventDefault();

console.log(firstName , lastName ,email , password);









if(firstName){

if(!nameRegex.test(firstName)){

    console.log("plz it must contain alphabet");
    errorMessages[0].classList.remove("d-none")
    fnFlag = false;
    
}
else{
    console.log("good to go");
    emptyfieldMessages[0].classList.add("d-none")
    errorMessages[0].classList.add("d-none")
    fnFlag = true;
}




}

else{
    
    emptyfieldMessages[0].classList.remove("d-none")
    errorMessages[0].classList.add("d-none")

console.log("plz fill this field");



}

// ==========22222222=======

if(lastName){

if(!nameRegex.test(lastName)){

    console.log("plz it must contain alphabet");
    errorMessages[1].classList.remove("d-none")
    lnFlag = false;
}
else{
    console.log("good to go");
    emptyfieldMessages[1].classList.add("d-none")
    errorMessages[1].classList.add("d-none")
    lnFlag = true;
}




}

else{
    
    emptyfieldMessages[1].classList.remove("d-none")
    errorMessages[1].classList.add("d-none")

console.log("plz fill this field");



}

// =========3=========


if(email){

if(!emailRegex.test(email)){

    console.log("plz it must contain alphabet")
    emptyfieldMessages[2].classList.add("d-none")
    errorMessages[2].classList.remove("d-none")
    eFlag = false;
}
else{
    console.log("good to go");
    emptyfieldMessages[2].classList.add("d-none")
    errorMessages[2].classList.add("d-none")
    eFlag = true;
}




}

else{
    
    emptyfieldMessages[2].classList.remove("d-none")
    errorMessages[2].classList.add("d-none")

console.log("plz fill this field");



}





if(password){

if(!passwordRegex.test(password)){

    console.log("plz it must contain alphabet");
    errorMessages[3].classList.remove("d-none");
    pwdFlag = false;
    
}
else{
    console.log("good to go");
    emptyfieldMessages[3].classList.add("d-none")
    errorMessages[3].classList.add("d-none");
    pwdFlag = true;
}




}

else{
    
    emptyfieldMessages[3].classList.remove("d-none")
    errorMessages[3].classList.add("d-none")

console.log("plz fill this field");



}

if( fnFlag && lnFlag && eFlag && pwdFlag){

    window.location.href = "success.html"

}



})



let showPassword = document.querySelector(".show-btn");



 showPassword.addEventListener("click", (e)=>{
e.preventDefault();

  if(pwdTarget.getAttribute("type") === "text"){
    pwdTarget.setAttribute("type", "password") 
  }

  else(
    pwdTarget.setAttribute("type","text")
  )

 })