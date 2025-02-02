let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.", "Guest");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName); // store the the content of "myname" in "name" in the local storage
    myHeading.textContent = "Welcome, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Welcome, " + storedName;
}

myButton.onclick = () => {
  setUserName();
};

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src"); // get the value of the src (source of the image) attribute from the html file
  if (mySrc === "images/B.png") {
    myImage.setAttribute("src", "images/A.png"); // change the value of the src attribute to the new image: src --> new image source
  } else {
    myImage.setAttribute("src", "images/B.png");
  }
});
