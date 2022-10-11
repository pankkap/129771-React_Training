const api_url = "https://jsonplaceholder.typicode.com/users";

function getRemoteData(url) {
  setTimeout(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayData(data))
      .catch((err) => console.log(err));
  }, 3000);
}

getRemoteData(api_url);

function displayData(serverData) {
  console.log(serverData);

  for (user of serverData) {
    let tr = document.createElement("tr");

    let td_1 = document.createElement("td");
    let td_2 = document.createElement("td");
    let td_3 = document.createElement("td");
    let td_4 = document.createElement("td");
    let td_5 = document.createElement("td");

    td_1.innerHTML = `${user.id}`;
    td_2.innerHTML = `${user.name}`;
    td_3.innerHTML = `${user.email}`;
    td_4.innerHTML = `${user.phone}`;
    td_5.innerHTML = `${user.address.city}`;

    tr.appendChild(td_1);
    tr.appendChild(td_2);
    tr.appendChild(td_3);
    tr.appendChild(td_4);
    tr.appendChild(td_5);

    document.getElementById("myTable").appendChild(tr);
  }
}
