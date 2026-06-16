const workers =
JSON.parse(localStorage.getItem("workers")) || [];

const jobs =
JSON.parse(localStorage.getItem("jobs")) || [];

const applications =
JSON.parse(
localStorage.getItem("applications")
) || [];

const workerCount =
document.getElementById(
"dashboardWorkers"
);

const jobCount =
document.getElementById(
"dashboardJobs"
);

const applicationCount =
document.getElementById(
"dashboardApplications"
);

if(workerCount)
workerCount.innerText =
workers.length;

if(jobCount)
jobCount.innerText =
jobs.length;

if(applicationCount)
applicationCount.innerText =
applications.length;

const dashboardWorkerContainer =
document.getElementById(
"dashboardWorkerContainer"
);

if(dashboardWorkerContainer){

workers.forEach(worker => {

dashboardWorkerContainer.innerHTML += `

<div class="worker-card">

<div class="worker-image">

<img src="${worker.image}">

</div>

<h3>
${worker.name}
</h3>

<p class="skill">
${worker.skill}
</p>

<p>
📍 ${worker.location}
</p>

</div>

`;

});

}