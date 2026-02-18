document.getElementById("accessForm").addEventListener("submit", async function(e){
  e.preventDefault();

  const username = document.getElementById("tvUsername").value;

  const res = await fetch("/api/submit", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({username})
  });

  const msg = document.getElementById("msg");

  if(res.ok){
    msg.innerText="Username Submitted Successfully!";
    msg.style.color="#22c55e";
  } else {
    msg.innerText="Error!";
    msg.style.color="red";
  }
});