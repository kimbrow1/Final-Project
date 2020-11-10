import { Header, Nav, Main, Footer } from "./Components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo(window.location.origin);

router
  .on({
    ":view": params => render(state[capitalize(params.view)]),
    "/": () => render(state.Home)
  })
  .resolve();

function render(st = state.Home) {
  // console.log("rendering state", st);
  // console.log("state.Blog", state.Blog);
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;

  router.updatePageLinks();

  addNavEventListeners();
  addPicOnFormSubmit(st);
}

function addNavEventListeners() {
  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
}

function addPicOnFormSubmit(st) {
  if (st.view === "Form") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      // convert HTML elements to Array
      let inputList = Array.from(event.target.elements);
      // remove submit button from list
      inputList.pop();
      // construct new picture object
      let newPic = inputList.reduce((pictureObject, input) => {
        pictureObject[input.name] = input.value;
        return pictureObject;
      }, {});
      // add new picture to state.Gallery.pictures
      state.Gallery.pictures.push(newPic);
      render(state.Gallery);
    });
  }
}

axios
  .get(
    "http://api.openweathermap.org/data/2.5/weather?q=nashville&appid=3fa03a84bcbee6ee40906d4f6d74b43b"
  )
  .then(response => {
    state.Home.weather.city = response.name;
    state.Home.weather.temp = response.main.temp;
    state.Home.weather.description = response.weather.main;
  });
