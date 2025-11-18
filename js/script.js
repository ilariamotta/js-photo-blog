const photoGrid = document.getElementById("polaroid-grid");
axios.
    get("https://lanciweb.github.io/demo/api/pictures/")
    .then(function (resp) {
        const photoArray = resp.data
        let curPolaroid = "";
        photoArray.forEach(curPhoto => {
            curPolaroid += `<div class="m-col m-flex m-justify-content-between"><div class="m-card m-flex m-dcol">
                    <div class="m-pin"><img src="./img/pin.svg" alt=""></div>
                    <div class="m-card-img m-flex m-justify-content-center"><img src="${curPhoto.url}" alt=""></div>
                    <div class="m-card-body">
                        <p class="my-date">${curPhoto.date}</p>
                        <p class="my-description">${curPhoto.title}</p>
                    </div>
                </div></div>`
        });
        photoGrid.innerHTML = curPolaroid;
    });


