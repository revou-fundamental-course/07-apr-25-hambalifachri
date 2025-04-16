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