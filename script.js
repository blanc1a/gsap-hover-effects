const items = document.querySelectorAll(".item");
const texts = document.querySelectorAll(".text");
const dots = document.querySelectorAll(".dot");

gsap.defaults({ duration: 0.3 });

items.forEach(function (item, index) {
  //our nodelist is like an array => can use forEach to loop over it
  console.log(item, index);

  const tl = gsap.timeline({ paused: true });

  tl.to(item.querySelector(".text"), {
    color: "white",
    x: 10,
    scale: 1.3,
    transformOrigin: "left center",
  })
    //problem: after using scale and even after increasing x => the longer the text the more it overlaps with the dot
    //solution: change the transformOrigin bc every text scales from the center
    .to(
      item.querySelector(".dot"),
      { backgroundColor: "#F93", scale: 1.5 },
      "<"
    );

  item.addEventListener("mouseenter", () => {
    tl.play();
  });
  item.addEventListener("mouseleave", () => {
    tl.reverse();
  });
});
