const form = document.querySelector("form");
const phoneNumber = document.querySelector("#phone");
const result = document.querySelector(".result");
const listItem = document.querySelector("li");

const url =
  "http://apilayer.net/api/validate?access_key=f91c715b577394c4c3e5ab1a95164202&number=";

const getData = async () => {
  let output = "";

  try {
    const response = await fetch(url + phoneNumber.value);
    const data = await response.json();
    console.log(data);
    const {
      valid,
      country_name,
      location,
      line_type,
      carrier,
      local_format,
      international_format,
    } = data;
    console.log(valid);
    if (!valid) {
      output += `<li class='failure'>Please Enter a valid Phone number</li>`;
    } else {
      output += `
      <li class=${country_name ? "success" : "faiure"}>Country Name:${
        country_name ? country_name : "Not Available"
      }</li>
      <li class=${location ? "success" : "faiure"}>Location:${
        location ? location : "Not Available"
      }</li>
      <li class=${line_type ? "success" : "faiure"}>Line type:${
        line_type ? line_type : "Not Available"
      }</li>
      <li class=${carrier ? "success" : "faiure"}>Carrier:${
        carrier ? carrier : "Not Available"
      }</li>
      <li class=${local_format ? "success" : "faiure"}>Local format:${
        local_format ? local_format : "Not Available"
      }</li>
      <li class=${
        international_format ? "success" : "faiure"
      }>International format:${
        international_format ? international_format : "Not Available"
      }</li>
      `;
    }
    result.innerHTML = output;
  } catch (error) {
    console.log(error);
  }

  // fetch(
  //   "http://apilayer.net/api/validate?access_key=f91c715b577394c4c3e5ab1a95164202&number=9840502921&country_code=NP&format=1"
  // )
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch((err) => {
  //     console.log(err);
  //   });
};

const formSubmit = (e) => {
  e.preventDefault();
  getData();
};

form.addEventListener("submit", formSubmit);
