const registerForm =
document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const users =
JSON.parse(localStorage.getItem("users")) || [];

const user = {

id:Date.now(),

name:
document.getElementById("fullName").value,

email:
document.getElementById("email").value,

phone:
document.getElementById("phone").value,

role:
document.getElementById("role").value,

password:
document.getElementById("password").value

};

users.push(user);

localStorage.setItem(
"users",
JSON.stringify(users)
);

alert("Account created!");

window.location =
"login.html";

});
}

const loginForm =
document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const email =
document.getElementById("loginEmail").value;

const password =
document.getElementById("loginPassword").value;

const users =
JSON.parse(localStorage.getItem("users")) || [];

const foundUser =
users.find(user =>
user.email === email &&
user.password === password
);

if(foundUser){

localStorage.setItem(
"currentUser",
JSON.stringify(foundUser)
);

alert("Login successful");

window.location =
"dashboard.html";

}
else{

alert("Invalid credentials");

}

});
}