const daftarkartu = document.querySelector(".isikartu");
fetch("jadwal.json")
  .then((response) => response.json())
  .then((response) => {
    const jadwal = response;
    let cards = "";
    jadwal.forEach((j) => {
      return (cards += showcard(j));
    });
    daftarkartu.innerHTML = cards;
  });

function showcard(j) {
  return `<div class="card" style="width: 18rem">
      <div class="card-header">${j.hari}</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${j.jadwal1}</li>
        <li class="list-group-item">${j.jadwal2}</li>
        <li class="list-group-item">${j.jadwal3}</li>
      </ul>
    </div>`;
}
