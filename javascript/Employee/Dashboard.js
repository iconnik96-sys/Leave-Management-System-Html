axios.get("http://localhost:5000/users")
.then(Response=>{
  const table  = document.getElementById("postTableBody");
  const a=Response.data;

  a.forEach(e => {
    table.innerHTML+=`
        <tr id=${e.id}>
          <td>${e.type}</td>
          <td>${e.from}</td>
          <td>${e.to}</td>
          <td>${e.days}</td>
          <td>${e.reason}</td>
          <td>${e.status}</td>                 
        </tr>                 
    `
  });
})
