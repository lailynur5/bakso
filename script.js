// Data bakso terenak Jawa Timur
const baksoData = [
    {
        nama: "Bakso President Surabaya",
        lokasi: "Surabaya",
        rating: 4.8
    },
    {
        nama: "Bakso Pak Ndut Malang",
        lokasi: "Malang",
        rating: 4.7
    },
    {
        nama: "Bakso Cak Man Sidoarjo",
        lokasi: "Sidoarjo",
        rating: 4.6
    },
    {
        nama: "Bakso Lapangan Tembak Mojokerto",
        lokasi: "Mojokerto",
        rating: 4.5
    },
    {
        nama: "Bakso Solo Pak Slamet Jombang",
        lokasi: "Jombang",
        rating: 4.4
    }
];

const baksoList = document.getElementById("baksoList");

// Render data bakso
baksoData.forEach(bakso => {
    const div = document.createElement("div");
    div.classList.add("bakso-item");
    div.innerHTML = `
        <h3>${bakso.nama}</h3>
        <p>Lokasi: <span>${bakso.lokasi}</span></p>
        <p>Rating: <span>${bakso.rating} ⭐</span></p>
    `;
    baksoList.appendChild(div);
});
