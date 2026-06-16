const darkBtn =
document.getElementById("darkModeBtn");

if(darkBtn){

  const savedTheme =
  localStorage.getItem("theme");

  if(savedTheme === "dark"){
    document.body.classList.add("dark");
  }

  darkBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
      localStorage.setItem("theme","dark");
      darkBtn.innerText = "☀️ Light Mode";
    }else{
      localStorage.setItem("theme","light");
      darkBtn.innerText = "🌙 Dark Mode";
    }

  });

}