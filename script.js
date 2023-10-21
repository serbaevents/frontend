document.addEventListener("DOMContentLoaded", function () {
    const concertsList = document.getElementById("concerts-list");
    const showMockupBtn = document.getElementById("show-mockup-btn");

    // Data konser dari file JSON (digunakan untuk tampilkan data konser)
    const concertsData = [
        {
            "id": 1,
            "nama": "Konser 1",
            "deskripsi": "Deskripsi konser pertama. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "jadwal": "10 November 2023, 19.00 WIB",
            "keterangan": "Konser diadakan di Gedung Konser XYZ.",
            "harga": 200000
        },
        {
            "id": 2,
            "nama": "Konser 2",
            "deskripsi": "Deskripsi konser kedua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "jadwal": "15 November 2023, 20.00 WIB",
            "keterangan": "Konser diadakan di Aula Seni ABC.",
            "harga": 250000
        },
        {
            "id": 3,
            "nama": "Konser 3",
            "deskripsi": "Deskripsi konser ketiga. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "jadwal": "20 November 2023, 18.30 WIB",
            "keterangan": "Konser diadakan di Lapangan ABC.",
            "harga": 180000
        },
        {
            "id": 4,
            "nama": "Konser 4",
            "deskripsi": "Deskripsi konser keempat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "jadwal": "25 November 2023, 19.30 WIB",
            "keterangan": "Konser diadakan di Teater ABC.",
            "harga": 220000
        },
        {
            "id": 5,
            "nama": "Konser 5",
            "deskripsi": "Deskripsi konser kelima. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "jadwal": "30 November 2023, 20.30 WIB",
            "keterangan": "Konser diadakan di Stadion XYZ.",
            "harga": 260000
        }
    ];

    // Fungsi untuk menampilkan data konser di halaman
    function renderConcerts(concerts) {
        concertsList.innerHTML = "";
        concerts.forEach(concert => {
            const card = document.createElement("div");
            card.className = "card mb-4";
            card.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${concert.nama}</h5>
                    <p class="card-text">${concert.deskripsi}</p>
                    <p class="card-text"><strong>Jadwal Keberangkatan:</strong> ${concert.jadwal}</p>
                    <p class="card-text"><strong>Keterangan:</strong> ${concert.keterangan}</p>
                    <p class="card-text"><strong>Harga:</strong> Rp ${concert.harga}</p>
                    <a href="#" class="btn btn-primary">Beli Tiket</a>
                </div>
            `;
            concertsList.appendChild(card);
        });
    }

    // Tampilkan data konser saat halaman dimuat
    renderConcerts(concertsData);

    // Tampilkan mock-up ketika tombol "Tampilkan Mock Up" ditekan
    showMockupBtn.addEventListener("click", function () {
        concertsList.innerHTML = "";
        const mockupCard = document.createElement("div");
        mockupCard.className = "card mb-4";
        mockupCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">Mock Up Penjualan Tiket Konser</h5>
                <p class="card-text">Ini adalah tampilan mock-up dari penjualan tiket konser.</p>
                <!-- Tambahkan elemen lainnya sesuai dengan mock-up Anda -->
            </div>
        `;
        concertsList.appendChild(mockupCard);
    });
});
