// Type code here

let form=document.querySelector("form");

let registerLs=JSON.parse(localStorage.getItem("register")) || [];


form.addEventListener("submit",function(event){
    event.preventDefault();
    let obj={
        firstName:form.first.value,
        lastName:form.last.value,
        email:form.email.value,
        password:form.pass.value,

    }
    if(obj.firstName == "" || obj.lastName=="" || obj.email=="" || obj.password==""){
        alert("Not empty Field required");
        return
    }
    registerLs.push(obj);
    localStorage.setItem("register",JSON.stringify(registerLs))
    
    window.location.href="home.html"
    
})

