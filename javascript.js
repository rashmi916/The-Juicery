let items = document.querySelectorAll(".product-card");
let loadBtn = document.getElementById("loadMoreBtn");

let visible = 8;
items.forEach((items,index) => {
    if(index >=visible){
        items.style.display = "none";
    }
});

loadBtn.addEventListener("click", function(){
    items.forEach(item =>{
        item.style.display = "block";
    });
    loadBtn.style.display = "none";
});