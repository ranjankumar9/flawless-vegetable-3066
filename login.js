// write code here

let form=document.querySelector("form")

let registerLs=JSON.parse(localStorage.getItem("register")) || [];

let login=JSON.parse(localStorage.getItem("login")) || [];
let form1=document.querySelector("form1")

form.addEventListener("submit",function(event){
    event.preventDefault();
    if(registerLs.length==="0"){
        alert("Please Register with my website")
        return;
    }
    
    let obj={
        email:form.email.value,
        password:form.password.value
    }
    registerLs.forEach(function(elem){
    if(elem.email===obj.email && elem.password===obj.password){
        localStorage.setItem("login",JSON.stringify(elem));
        alert("login Successfully");
        window.location.href="home.html"
       
    }
})
alert("User Doesn't Exist")
    
})

form1.addEventListener("click",function(event){
    
    window.location.href="register.html"
})


