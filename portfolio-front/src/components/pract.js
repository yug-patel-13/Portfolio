document.addEventListener("DOMContentLoaded",async()=>{

    const response=await fetch('/api/data');
    const data=await response.json();

    const dataBody=document.getElementById(dataBody);
    data.ForEach(item=>{

        const row=document.createElement("tr")

        const namecell=document.createElement("td");
        namecell.textContent=item.name;
        row.appendChild(namecell)

        const emailCell=document.createElement("td")
        emailCell.textContent=item.email;
        row.appendChild(emailCell)

        const messageCell=document.createElement("td")
        messageCell.textContent=item.message;
        row.appendChild(messageCell)

        dataBody.appendChild(row)
    });
});