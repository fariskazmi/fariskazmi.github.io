const hero = document.querySelector(".hero");
const logo = document.querySelector('#logo');
const header = document.querySelector("header");

const timeline1 = new TimelineMax();

timeline1.fromTo(hero, 1, {height: "0%"}, {height: "60%", ease: Power2.easeInOut})
.fromTo(hero, 1.2, {width: "100%"}, {width: "70%", ease: Power2.easeInOut}, "-=1.2")
.fromTo(header, 1, {height: "0vh"}, {height: "9vh", ease: Power2.easeInOut}, "-=2.0")
.fromTo(hero, 1, {height: "60%"}, {height: "100%", ease: Power2.easeInOut})
.fromTo(hero, 1.2, {width: "70%"}, {width: "100%", ease: Power2.easeInOut});