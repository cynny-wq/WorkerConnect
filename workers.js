const workers = JSON.parse(localStorage.getItem("workers")) || [

{
id:1,
name:"John Kamau",
skill:"Mason",
location:"Nairobi",
phone:"+254712345678",
rating:4.8,
reviews:12,
availability:"Available",
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
image:"https://i.pravatar.cc/150?img=2"
},

{
id:3,
name:"Peter Otieno",
skill:"Electrician",
location:"Nakuru",
phone:"+254734567890",
rating:4.7,
reviews:15,
availability:"Busy",
image:"https://i.pravatar.cc/150?img=3"
}

];

localStorage.setItem(
"workers",
JSON.stringify(workers)
);
workerCard.innerHTML +=`
<button
class="hire-btn"
onclick="upgradeWorker('${worker.name}')">
Become Premium
</button>
`;

