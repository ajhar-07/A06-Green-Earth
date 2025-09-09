let totalPrice = 0; 

// ------- Spinner loading 
function showSpinner() {
  document.getElementById("spinner").classList.remove("hidden");
}
function hideSpinner() {
  document.getElementById("spinner").classList.add("hidden");
}

// ------Category Section (API)
const Categories = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then(res => res.json())
    .then(all_categories => displayCategories(all_categories.categories))
    .catch(err => console.error("Categories load error:", err));
};

const displayCategories = (ctgrs) => {
  const Categories_container = document.getElementById("Categories-container");
  Categories_container.innerHTML = "";

  // ----All Trees btn
  const allOption = document.createElement("div");
  allOption.innerHTML = `
    <div 
      class="category-item py-2 p-2 rounded-xl w-full text-left cursor-pointer bg-green-500 text-white" 
      id="all">
      All Trees
    
    </div>`;
  Categories_container.appendChild(allOption);

  ctgrs.forEach((ctg) => {
    const newCtg = document.createElement("div");
    newCtg.innerHTML = `
      <div 
        class="category-item py-2 p-2 rounded-xl w-full text-left cursor-pointer" 
        id="${ctg.id}">
        ${ctg.category_name}
      </div>`;
    Categories_container.appendChild(newCtg);
  });

  // Button coloring
  const allCategoryItems = Categories_container.querySelectorAll(".category-item");
  allCategoryItems.forEach(item => {
    item.addEventListener("click", function () {
      allCategoryItems.forEach(i => i.classList.remove("bg-green-500", "text-white"));
      this.classList.add("bg-green-500", "text-white");
      const id = this.getAttribute("id");
      if (id === "all") {
        loadAllplants(); 
      } else {
        loadCategoryPlants(id); 
      }
    });
  });
};

// -----loadAllplants
const loadAllplants = () => {
  showSpinner();
  const url = "https://openapi.programming-hero.com/api/plants";
  fetch(url)
    .then(res => res.json())
    .then(all_plants_show => {
      renderPlants(all_plants_show.plants);
      hideSpinner();
    })
    .catch(err => {
      console.error("All plants load error:", err);
      hideSpinner();
    });
};

const loadCategoryPlants = (id) => {
  showSpinner();
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      renderPlants(data.plants);
      hideSpinner();
    })
    .catch(err => {
      console.error("Category load error:", err);
      hideSpinner();
    });
};

// -----for all plants 
function renderPlants(plants) {
  const all_plants = document.getElementById("all_plants");
  all_plants.innerHTML = "";

  if (!plants || plants.length === 0) {
    all_plants.innerHTML = `<p class="text-center text-gray-500">No plants found in this category.Api Error</p>`;
    return;
  }

  plants.forEach((plant) => {
    const newPlnt = document.createElement("div");
    newPlnt.innerHTML = `
      <div class="md:w-[260px] w-full bg-white rounded-2xl shadow-md p-4 space-y-4">
        <img src="${plant.image}" class="w-full h-60 bg-gray-200 rounded-xl">

        <div>
          <h2 class="text-lg font-semibold cursor-pointer" onclick="loadPlantDtl(${plant.id})">
            ${plant.name?plant.name: "Name not available"}
          </h2>
          <p class="text-sm text-gray-600">
            ${plant.description?plant.description.slice(0,50) : "Description not available"}
          </p>
        </div>

        <div class="flex justify-between items-center">
          <span class="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full cursor-pointer">
            ${plant.category || "No category"}
          </span>
          <span class="text-lg font-bold text-gray-800">৳${plant.price?plant.price:"no price added"}</span>
        </div>

        <button class="add-cart-btn w-full py-3 bg-green-700 text-white rounded-full font-medium hover:bg-green-800 transition">
          Add to Cart
        </button>
      </div>
    `;
    all_plants.appendChild(newPlnt);

  
    newPlnt.querySelector(".add-cart-btn").addEventListener("click", () => {
      alert(`${plant.name} Added to Cart`);
      addToCart(plant);
    });
  });
}

//------- Modal 
const loadPlantDtl = (id) => {
  showSpinner();
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      displayModal(data.plants); 
      hideSpinner();
    })
    .catch(err => {
      console.error("details load error:", err);
      hideSpinner();
    });
};

const displayModal = (plant) => {
  const main = document.getElementById("main");
  const oldModal = document.getElementById("my_modal_5");
  if (oldModal) oldModal.remove();

  const modal = document.createElement("dialog");
  modal.id = "my_modal_5";
  modal.className = "modal modal-bottom sm:modal-middle";

  modal.innerHTML = `
    <div class="modal-box md:w-[420px] w-[390px] mx-auto overflow-hidden p-5">
      <h3 class="text-lg font-bold">${plant.name?plant.name:"not available"}</h3>
      <img src="${plant.image}" alt="${plant.name}" class="w-full h-[250px] mt-1 mb-1">
      <p><span class="font-semibold">Category:</span> ${plant.category?plant.category:"not available"}</p>
      <p class="pt-1 pb-1"><span class="font-semibold">Description:</span> ${plant.description?plant.description.slice(0,100): "No description"}</p>
      <p><span class="font-semibold">Price:</span> ৳${plant.price?plant.price:"not available"}</p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  `;
  
  main.appendChild(modal);
  modal.showModal();
};

// ------add to cart items
function addToCart(plant) {
  const addto_cart = document.getElementById("addto_cart");

  const new_cart_data = document.createElement("div");
  new_cart_data.classList.add("flex", "items-center", "justify-between", "bg-green-50", "rounded-lg", "p-3", "md:w-40", "mb-2","w-[350px]");

  new_cart_data.innerHTML = `
      <div>
          <h2 class="font-semibold text-gray-900">${plant.name?plant.name:"not available"}</h2>
          <p class="text-gray-500 text-sm">৳${plant.price?plant.price:"not available"} × 1</p>
      </div>
      <button class="remove-btn text-gray-500 hover:text-red-500">✕</button>
  `;

  addto_cart.appendChild(new_cart_data);

  totalPrice += plant.price;
  updateTotal();

  new_cart_data.querySelector(".remove-btn").addEventListener("click", () => {
    new_cart_data.remove();
    totalPrice -= plant.price;
    updateTotal();
  });
}

function updateTotal() {
  const cartTotal = document.getElementById("total");
  cartTotal.innerText = `৳${totalPrice}`;
}

Categories();
loadAllplants();
