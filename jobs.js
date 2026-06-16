const jobs =
JSON.parse(localStorage.getItem("jobs")) || [];

const jobContainer =
document.getElementById("jobContainer");

function displayJobs(){

if(!jobContainer) return;

jobContainer.innerHTML = "";

jobs.forEach(job => {

jobContainer.innerHTML += `

<div class="job-card">

<h3>${job.title}</h3>

<p>
📍 ${job.location}
</p>

<p>
💰 ${job.budget}
</p>

<p>
${job.description}
</p>

<button
class="apply-btn"
onclick="applyJob(${job.id})"
>
Apply
</button>

</div>

`;

});

}

displayJobs();

const jobForm =
document.getElementById("jobForm");

if(jobForm){

jobForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const newJob = {

id:Date.now(),

title:
document.getElementById("jobTitle").value,

location:
document.getElementById("jobLocation").value,

budget:
document.getElementById("jobBudget").value,

description:
document.getElementById("jobDescription").value

};

jobs.push(newJob);

localStorage.setItem(
"jobs",
JSON.stringify(jobs)
);

alert("Job posted!");

jobForm.reset();

displayJobs();

});
}

function applyJob(jobId){

const currentUser =
JSON.parse(
localStorage.getItem("currentUser")
);

if(!currentUser){

alert(
"Please login first"
);

return;

}

const applications =
JSON.parse(
localStorage.getItem("applications")
) || [];

applications.push({

id:Date.now(),

jobId,

worker:
currentUser.name,

status:"Pending"

});

localStorage.setItem(
"applications",
JSON.stringify(applications)
);

alert(
"Application submitted"
);

}