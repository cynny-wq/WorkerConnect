const registerForm =
document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener(
"submit",
async function(e){

e.preventDefault();
const { error } = await supabase
  .from("users")
  .insert([
    {
      full_name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      password: user.password
    }
  ]);

if (error) {
  alert(error.message);
  return;
}
window.location =
"login.html";

});
}

const loginForm =
document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener(
"submit",
async function(e){

e.preventDefault();

const email =
document.getElementById("loginEmail").value;

const password =
document.getElementById("loginPassword").value;
const { data, error } = await supabase
  .from("users")
  .select("*")
  .eq("email", email)
  .eq("password", password)
  .single();

if(error || !data){
  alert("Invalid credentials");
  return;
}
if(data){

localStorage.setItem(
"currentUser",
JSON.stringify(data)
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
