

let weatherPrompt = "What weather are you feeling like?\n1. Cloudy\n2. Rainy\n3. Sunny\n4. Snowy\n5. Windy";
let userChoice = prompt(weatherPrompt);


userChoice = userChoice.toLowerCase();

if (userChoice === "cloudy" || userChoice === "1") {
    document.write(`<div class="cloudy">
        <div class=" container mt-5 d-flex justify-content-center">
    <div class="card weather-card" style="width: 18rem; border: 1px solid #d3d3d3; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <img src="https://i.pinimg.com/originals/41/4f/60/414f60aad193d61c656ed52f2989366a.gif" class="card-img-top" alt="Cloudy Weather Image" style="height: 150px; object-fit: cover;">
        <div class="card-body">
            <h5 class="card-title">Cloudy Weather</h5>
            <p class="card-text">The sky is covered with clouds, making it a perfect day to relax indoors or enjoy a calm walk outside.</p>
            <a href="#" class="btn btn-primary">More Details</a>
        </div>
    </div>
</div>
        </div>
`);
} else if (userChoice === "rainy" || userChoice === "2"){

    document.write(`<div class="rainy">
        <div class="container mt-5 d-flex justify-content-center">
    <div class="card weather-card" style="width: 18rem; border: 1px solid #d3d3d3; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/15fbcc74510513.5c327cd3e9c68.gif" class="card-img-top" alt="Cloudy Weather Image" style="height: 150px; object-fit: cover;">
        <div class="card-body">
            <h5 class="card-title">Rainy Weather</h5>
            <p class="card-text">The sky is covered with clouds, making it a perfect day to relax indoors or enjoy a calm walk outside.</p>
            <a href="#" class="btn btn-primary">More Details</a>
        </div>
    </div>
</div>
        </div>
`)
} else if(userChoice === "sunny" || userChoice === "3" ){
    document.write(`<div class="sunny">
        <div class="container mt-5 d-flex justify-content-center">
    <div class="card weather-card" style="width: 18rem; border: 1px solid #d3d3d3; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <img src="https://i.gifer.com/CZx.gif" class="card-img-top" alt="Cloudy Weather Image" style="height: 150px; object-fit: cover;">
        <div class="card-body">
            <h5 class="card-title">Sunny Weather</h5>
            <p class="card-text">The sky is covered with clouds, making it a perfect day to relax indoors or enjoy a calm walk outside.</p>
            <a href="#" class="btn btn-primary">More Details</a>
        </div>
    </div>
</div>
        </div>`)
}else if(userChoice === "snowy" || userChoice === "4"){
    document.write(`<div class="snowy">
        <div class="container mt-5 d-flex justify-content-center">
    <div class="card weather-card" style="width: 18rem; border: 1px solid #d3d3d3; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <img src="https://i.pinimg.com/originals/88/58/98/8858983ab51318e2c58dd8494314aaee.gif" class="card-img-top" alt="Cloudy Weather Image" style="height: 150px; object-fit: cover;">
        <div class="card-body">
            <h5 class="card-title">Snowy Weather</h5>
            <p class="card-text">The sky is covered with clouds, making it a perfect day to relax indoors or enjoy a calm walk outside.</p>
            <a href="#" class="btn btn-primary">More Details</a>
        </div>
    </div>
</div>
        </div>`)
}else if(userChoice === "windy" || userChoice === "5"){
    document.write(`<div class="windy">
        <div class="container mt-5 d-flex justify-content-center">
    <div class="card weather-card" style="width: 18rem; border: 1px solid #d3d3d3; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <img src="https://i.pinimg.com/originals/84/1b/6b/841b6b53857ee1b71ec0615fdc9f5937.gif" class="card-img-top" alt="Cloudy Weather Image" style="height: 150px; object-fit: cover;">
        <div class="card-body">
            <h5 class="card-title">Windy Weather</h5>
            <p class="card-text">The sky is covered with clouds, making it a perfect day to relax indoors or enjoy a calm walk outside.</p>
            <a href="#" class="btn btn-primary">More Details</a>
        </div>
    </div>
</div>
        </div>`)

}else{
    document.write(` <div class="error-container">
        <img src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" alt="Error Illustration">
        <h1>You're Putting Something Wrong!</h1>
        <p>We can't seem to find what you're looking for. Please try again.</p>
        <button class="btn btn-custom" onclick="window.location.reload();">Try Again</button>
    </div>`)
}

