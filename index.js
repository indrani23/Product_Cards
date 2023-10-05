let data = [];

let container = document.getElementById("container");

fetch("https://fakestoreapi.com/products")
.then((res) => res.json())
.then((res) => {
    data = res;
    data.forEach((val) => {
        let colouredRatingStar = parseInt(val.rating.rate);
        let notcolouredRatingStar = 5 - parseInt(val.rating.rate);

        let tempDiv = document.createElement("div");
        let allStarDiv = document.createElement("div");
        allStarDiv.setAttribute("id", "all__star");
        allStarDiv.setAttribute("class", "all__star");
        for(let i=0;i<colouredRatingStar;i++) {
            allStarDiv.innerHTML += `<span class="star__filled">&#9733;</span>`;
        }

        for(let i=0;i<notcolouredRatingStar;i++) {
            allStarDiv.innerHTML += `<span class="star__notfilled">&#9734;</span>`;
        }

        tempDiv.appendChild(allStarDiv);

        container.innerHTML += `<div class="card">
        <img src=${val.image} class="img" alt="image" />
        <div class="details">
            <span class="product__name">${val.title}</span>
            <span class="product__category">${val.category}</span>
            ${tempDiv.innerHTML}
            <div class="rating__count">Rating Count : <span>${val.rating.count}</span></div>
        </div>
        <div class="btn">
            <button class="btn__buy">Buy Now</button>
        </div>
    </div>`
        
    });
})