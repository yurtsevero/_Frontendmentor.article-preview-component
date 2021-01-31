document.getElementById("share-icon").addEventListener("click", () => {
  let profileFooter = document.getElementsByClassName("profile-footer");
  let articleFooter = document.getElementsByClassName("article-footer")[0];
  let imgContainer = document.getElementById("share-icon");
  let svgImg = document.getElementsByClassName("svg-img")[0];
  svgImg.classList.toggle("share");
  imgContainer.classList.toggle("share");
  if (window.innerWidth < 769) {
    articleFooter.classList.toggle("share");
  } else {
    articleFooter.classList.toggle("share-big-screen");
  }

  if (articleFooter.classList.contains("share")) {
    profileFooter[0].style.display = "none";
    profileFooter[1].style.display = "flex";
  } else if (articleFooter.classList.contains("share-big-screen")) {
    profileFooter[1].style.display = "flex";
  } else {
    profileFooter[0].style.display = "flex";
    profileFooter[1].style.display = "none";
  }
});
