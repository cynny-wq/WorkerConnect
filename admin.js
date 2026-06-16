const currentUser =
JSON.parse(
localStorage.getItem(
"currentUser"
)
);

if(!currentUser){

alert(
"Please login first"
);

window.location =
"login.html";

}


// ======================
// LOAD DATA
// ======================

const workers =
JSON.parse(
localStorage.getItem("workers")
) || [];

const jobs =
JSON.parse(
localStorage.getItem("jobs")
) || [];

const payments =
JSON.parse(
localStorage.getItem("payments")
) || [];

// ======================
// DASHBOARD STATS
// ======================

let totalRevenue = 0;

payments.forEach(payment => {

totalRevenue +=
Number(payment.amount);

});

document.getElementById(
"adminWorkers"
).innerText = workers.length;

document.getElementById(
"adminJobs"
).innerText = jobs.length;

document.getElementById(
"adminPayments"
).innerText = payments.length;

document.getElementById(
"adminRevenue"
).innerText =
`KES ${totalRevenue}`;

// ======================
// WORKERS
// ======================

const workerContainer =
document.getElementById(
"adminWorkerContainer"
);

workers.forEach(worker => {

workerContainer.innerHTML += `

<div class="worker-card">

<h3>
${worker.name}
</h3>

<p>
${worker.skill}
</p>

<p>
${worker.location}
</p>

<p>
${worker.featured
? "⭐ Featured"
: "Standard"}
</p>

<button
class="hire-btn"
onclick="deleteWorker(${worker.id})"
>
Delete
</button>

</div>

`;

});

// ======================
// JOBS
// ======================

const jobContainer =
document.getElementById(
"adminJobContainer"
);

jobs.forEach(job => {

jobContainer.innerHTML += `

<div class="job-card">

<h3>
${job.title}
</h3>

<p>
${job.location}
</p>

<p>
${job.budget}
</p>
<button
class="admin-btn delete-btn"
onclick="deleteJob(${job.id})"
>
Delete Job
</button>
<button
class="admin-btn approve-btn"
onclick="approveFeatured(${worker.id})"
>
Approve Featured
</button>

<button
class="admin-btn delete-btn"
onclick="deleteWorker(${worker.id})"
>
Delete Worker
</button>

</div>

`;

});

// ======================
// DELETE WORKER
// ======================

function deleteWorker(id){

const updatedWorkers =
workers.filter(worker =>
worker.id !== id
);

localStorage.setItem(
"workers",
JSON.stringify(updatedWorkers)
);

location.reload();

}

// ======================
// DELETE JOB
// ======================

function deleteJob(id){

const updatedJobs =
jobs.filter(job =>
job.id !== id
);

localStorage.setItem(
"jobs",
JSON.stringify(updatedJobs)
);

location.reload();

}

