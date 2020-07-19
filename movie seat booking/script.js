const movie = document.querySelector("#movie");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const container = document.querySelector(".container");
const totalPrice = document.querySelector("#total");
const totalSeats = document.querySelector("#count");

populateUI();

let price = +movie.value;
// console.log(typeof price);

// Save Selected movie index and price
saveMovieData = (index, price) => {
  console.log(index);
  localStorage.setItem("selectedMovieIndex", index);
  localStorage.setItem("selectedMoviePrice", price);
};

// Update Count
updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  // Save index of seats in local storage
  // For this map array and return index array
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  // Since we are saving array, so we need to wrap into JSON.stringify()
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const totalSelectedSeats = selectedSeats.length;
  totalSeats.innerText = totalSelectedSeats;
  totalPrice.innerText = totalSelectedSeats * price;
  // console.log(seatsIndex);
};

//Get data from local storage and Populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex=localStorage.getItem('selectedMovieIndex');
  if(selectedMovieIndex!==null){
    movie.selectedIndex=selectedMovieIndex;
  }

  console.log(selectedSeats);
}

// Select seats
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
    // console.log(e.target);
  }
});

// Movie Select Event
movie.addEventListener("change", (e) => {
  price = e.target.value;
  saveMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Initial Count and Total set
updateSelectedCount();
