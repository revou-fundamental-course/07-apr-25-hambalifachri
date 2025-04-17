function validateForm() {
    const name = document.getElementById("name").value;

    if (name == "") {
        // Disini logika ketika gagal
        alert ("Please enter your name");
    } else {
        // Disini logika ketika sukses
        alert ("Form submit successfully");
    }
}

const userInput = prompt("Siapa nama kamu?");
    
    // Jika user mengisi dan tidak kosong
    if (userInput && userInput.trim() !== "") {
      document.getElementById("username").textContent = userInput;
    }

let indexBanner = 0;

function nextBanner() {
    indexBanner += 1;
    showBanner();
}

function showBanner() {
    const bannerList = document.getElementsByClassName("banner-img");

    if (indexBanner > bannerList.length -1) {
        indexBanner = 0;
    }

    // Hide banner with looping
    for (let i = 0; i < bannerList.length; i++) {
        bannerList[i].style = "display: none";
    }

    // Show the banner
    bannerList[indexBanner].style = "display: block"
}

showBanner();

// Set interval to change the banner every 3 second
setInterval(() => {
    nextBanner();
}, 3000);

// Tampilkan waktu saat ini
const now = new Date();
document.getElementById("currentTime").textContent = now.toString();

// Tangani form submit
document.getElementById("messageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const tanggal = document.getElementById("tanggal").value;
  const pesan = document.getElementById("pesan").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  document.getElementById("outputNama").textContent = nama;
  document.getElementById("outputTanggal").textContent = tanggal;
  document.getElementById("outputGender").textContent = gender;
  document.getElementById("outputPesan").textContent = pesan;
});
