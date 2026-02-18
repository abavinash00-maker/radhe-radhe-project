document.getElementById("accessForm").addEventListener("submit", async function(e){
    e.preventDefault();

    const username = document.getElementById("tvUsername").value;

    const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username })
    });

    if(response.ok){
        document.getElementById("successMsg").style.display = "block";
        this.reset();
    } else {
        alert("Error submitting username");
    }
});