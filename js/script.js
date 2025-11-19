


const photoGrid = document.getElementById("polaroid-grid");
const loadingMan = document.getElementById("loader");

const bigPhoto = document.getElementById("bigPhoto");
const photoOverlay = document.getElementById("photo-overlay");

const xButton = document.getElementById("close");



axios.
    get("https://lanciweb.github.io/demo/api/pictures/")
    .then(function (resp) {
        const photoArray = resp.data
        let curPolaroid = "";
        photoArray.forEach(curPhoto => {
            curPolaroid += `<div class="m-col m-flex m-justify-content-between"><div class="m-card m-flex m-dcol">
                    <div class="m-pin"><img src="./img/pin.svg" alt=""></div>
                    <div class="m-card-img m-flex m-justify-content-center"><img class="photo-polaroid" src="${curPhoto.url}" alt=""></div>
                    <div class="m-card-body">
                        <p class="my-date">${curPhoto.date}</p>
                        <p class="my-description">${curPhoto.title}</p>
                    </div>
                </div></div>`

        });
        photoGrid.innerHTML = curPolaroid;

        const polaroid = document.querySelectorAll(".photo-polaroid");

        polaroid.forEach((element) => {
            element.addEventListener("click", function () {
                bigPhoto.src = element.src;
                photoOverlay.classList.remove("hidden");

                xButton.addEventListener("click", function () {
                    photoOverlay.classList.add("hidden");
                })

            })
        })

        loader.classList.add("m-dnone");

        photoGrid.classList.remove("m-dnone");
    });














