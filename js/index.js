const background_image = document.querySelector("#showcase");
const header = document.querySelector("header");
const body = document.querySelector("body");

const timeline_1 = new TimelineMax();

timeline_1.fromTo(background_image,2, {height: "0px"}, {height: "452px"}).fromTo(header, 3, {width: "60%"}, {width: "100%"}, "-=2");
