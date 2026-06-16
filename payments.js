// ==========================
// PAYMENTS DASHBOARD
// ==========================

const payments =
JSON.parse(
localStorage.getItem("payments")
) || [];

const paymentContainer =
document.getElementById(
"paymentContainer"
);

let totalRevenue = 0;
let premiumRevenue = 0;
let featuredRevenue = 0;

// ==========================
// DISPLAY PAYMENTS
// ==========================

function displayPayments(){

if(!paymentContainer) return;

paymentContainer.innerHTML = "";

payments.forEach(payment => {

totalRevenue += Number(payment.amount);

if(
payment.type ===
"Premium Subscription"
){

premiumRevenue +=
Number(payment.amount);

}

if(
payment.type ===
"Featured Worker"
){

featuredRevenue +=
Number(payment.amount);

}

paymentContainer.innerHTML += `

<div class="job-card">

<h3>
${payment.name}
</h3>

<p>
💰 KES ${payment.amount}
</p>

<p>
${payment.type}
</p>

<p>
📅 ${payment.date}
</p>

</div>

`;

});

updateRevenueCards();

}

// ==========================
// UPDATE CARDS
// ==========================

function updateRevenueCards(){

const totalRevenueElement =
document.getElementById(
"totalRevenue"
);

const totalPaymentsElement =
document.getElementById(
"totalPayments"
);

const premiumRevenueElement =
document.getElementById(
"premiumRevenue"
);

const featuredRevenueElement =
document.getElementById(
"featuredRevenue"
);

if(totalRevenueElement){

totalRevenueElement.innerText =
`KES ${totalRevenue}`;

}

if(totalPaymentsElement){

totalPaymentsElement.innerText =
payments.length;

}

if(premiumRevenueElement){

premiumRevenueElement.innerText =
`KES ${premiumRevenue}`;

}

if(featuredRevenueElement){

featuredRevenueElement.innerText =
`KES ${featuredRevenue}`;

}

}

// ==========================
// START
// ==========================

displayPayments();
function clearPayments(){

const confirmDelete =
confirm(
"Delete all payment records?"
);

if(!confirmDelete) return;

localStorage.removeItem(
"payments"
);

location.reload();

}