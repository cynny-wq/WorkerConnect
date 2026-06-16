// ==========================
// WORKERCONNECT APP.JS
// ==========================

// Load workers
let workers =
JSON.parse(localStorage.getItem("workers")) || [

{
id:1,
name:"John Kamau",
skill:"Mason",
location:"Nairobi",
phone:"+254712345678",
rating:4.8,
reviews:12,
availability:"Available",
featured:false,
premium:false,
image:"https://i.pravatar.cc/150?img=1"
},

{
id:2,
name:"Grace Wanjiru",
skill:"Plumber",
location:"Kiambu",
phone:"+254723456789",
rating:4.9,
reviews:19,
availability:"Available",
featured:true,
premium:true,
image:"https://i.pravatar.cc/150?img=2"
}

];

// Save default workers
localStorage.setItem(
"workers",
JSON.stringify(workers)
);

// ==========================
// ELEMENTS
// ==========================

const workerContainer =
document.getElementById("workerContainer");

const searchInput =
document.getElementById("searchInput");

// ==========================
// DISPLAY WORKERS
// ==========================

function displayWorkers(workerList){

if(!workerContainer) return;

// Featured workers first
workerList.sort(
(a,b) => Number(b.featured) - Number(a.featured)
);

workerContainer.innerHTML = "";

workerList.forEach(worker => {

workerContainer.innerHTML += `

<div class="worker-card">

<div class="worker-image">
<img src="${worker.image}" alt="${worker.name}">
</div>

${
worker.featured
?
`<p style="color:gold;font-weight:bold;">
⭐ Featured Worker
</p>`
:
""
}

${
worker.premium
?
`<p style="color:#2563eb;font-weight:bold;">
💎 Premium Member
</p>`
:
""
}

<h3>${worker.name}</h3>

<p class="skill">
${worker.skill}
</p>

<p>
⭐ ${worker.rating}
(${worker.reviews} reviews)
</p>

<p>
📍 ${worker.location}
</p>

<p>
${
worker.availability === "Available"
?
"🟢 Available"
:
"🔴 Busy"
}
</p>

<button
class="hire-btn"
onclick="contactWorker('${worker.phone}')"
>
Contact Worker
</button>

<button
class="hire-btn"
onclick="upgradeWorker(${worker.id})"
>
Become Premium
</button>

<button
class="hire-btn"
onclick="featureWorker(${worker.id})"
>
Feature Profile
</button>

</div>

`;

});

}

// ==========================
// CONTACT WORKER
// ==========================

function contactWorker(phone){

const clean =
phone.replace("+","");

window.open(
`https://wa.me/${clean}`,
"_blank"
);

}

// ==========================
// PREMIUM SUBSCRIPTION
// ==========================

function upgradeWorker(id){

workers = workers.map(worker => {

if(worker.id === id){

worker.premium = true;

recordPayment(
worker.name,
299,
"Premium Subscription"
);

}

return worker;

});

saveWorkers();

alert(
"Premium Membership Activated!"
);

displayWorkers(workers);

updateStats();

}

// ==========================
// FEATURE PROFILE
// ==========================

function featureWorker(id){

workers = workers.map(worker => {

if(worker.id === id){

worker.featured = true;

recordPayment(
worker.name,
200,
"Featured Worker"
);

}

return worker;

});

saveWorkers();

alert(
"Profile Featured Successfully!"
);

displayWorkers(workers);

updateStats();

}

// ==========================
// PAYMENT RECORDS
// ==========================

function recordPayment(
name,
amount,
type
){

const payments =
JSON.parse(
localStorage.getItem("payments")
) || [];

payments.push({

name:name,

amount:amount,

type:type,

date:new Date().toLocaleDateString()

});

localStorage.setItem(
"payments",
JSON.stringify(payments)
);

}

// ==========================
// SAVE WORKERS
// ==========================

function saveWorkers(){

localStorage.setItem(
"workers",
JSON.stringify(workers)
);

}

// ==========================
// SEARCH
// ==========================

if(searchInput){

searchInput.addEventListener(
"keyup",
function(){

const value =
searchInput.value.toLowerCase();

const filtered =
workers.filter(worker =>

worker.name
.toLowerCase()
.includes(value)

||

worker.skill
.toLowerCase()
.includes(value)

||

worker.location
.toLowerCase()
.includes(value)

);

displayWorkers(filtered);

}
);

}

// ==========================
// HOME STATS
// ==========================

function updateStats(){

const workerCount =
document.getElementById("workerCount");

const jobCount =
document.getElementById("jobCount");

const applicationCount =
document.getElementById("applicationCount");

const workers =
JSON.parse(
localStorage.getItem("workers")
) || [];

const jobs =
JSON.parse(
localStorage.getItem("jobs")
) || [];

const applications =
JSON.parse(
localStorage.getItem("applications")
) || [];

if(workerCount){

workerCount.innerText =
workers.length;

}

if(jobCount){

jobCount.innerText =
jobs.length;

}

if(applicationCount){

applicationCount.innerText =
applications.length;

}

}

// ==========================
// LOAD APP
// ==========================

displayWorkers(workers);

updateStats();
<button
class="hire-btn"
onclick="approveFeatured(${worker.id})"
>
Approve Featured
</button>
function approveFeatured(id){

workers.forEach(worker => {

if(worker.id === id){

worker.featured = true;

}

});

localStorage.setItem(
"workers",
JSON.stringify(workers)
);

location.reload();

}
const supabaseUrl = "https://flnilikriozyjvkpzuve.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsbmlsaWtyaW96eWp2a3B6dXZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5MjU3MTMsImV4cCI6MjA5NjUwMTcxM30.8xnBN20Vf1hh7zRRqa2zBd0o8j8hsYifw8Xe7yaDii4";

const client = supabase.createClient(supabaseUrl, supabaseKey);

console.log("Supabase connected!");
<script type="module">
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "YOUR_PROJECT_URL";
const supabaseKey = "YOUR_ANON_KEY";

const supabase = createClient(supabaseUrl, supabaseKey);

// 🔹 SAVE DATA
window.addData = async function () {
  const name = document.getElementById("name").value;

  const { data, error } = await supabase
    .from("test")
    .insert([{ name }]);

  document.getElementById("result").innerText =
    JSON.stringify({ data, error }, null, 2);
};

// 🔹 LOAD DATA
window.loadData = async function () {
  const { data, error } = await supabase
    .from("test")
    .select("*");

  document.getElementById("result").innerText =
    JSON.stringify({ data, error }, null, 2);
};
</script>