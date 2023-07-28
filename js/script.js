let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 20) {
    navbar.classList.add("solid-nav");
  } else {
    navbar.classList.remove("solid-nav");
  }
});


let media = document.querySelectorAll(".media")


for(let i = 0; i<media.length; i++){
  let img = document.createElement("img");
  img.setAttribute("src",`https://picsum.photos/1280/720?random=${i}`)
  media[i].appendChild(img)
}



