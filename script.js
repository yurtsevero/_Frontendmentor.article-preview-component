document.getElementById("share-icon").addEventListener("click", () => {
  let profileFooter = document.getElementsByClassName("profile-footer");
  let articleFooter = document.getElementsByClassName("article-footer")[0];
  let imgContainer = document.getElementById("share-icon");
  let svgImg = document.getElementsByClassName("svg-img")[0];
  articleFooter.classList.toggle("share");
  imgContainer.classList.toggle("share");
  svgImg.classList.toggle("share");

  if (articleFooter.classList.contains("share")) {
    console.log("asdhkajd");
    profileFooter[0].style.display = "none";
    profileFooter[1].style.display = "flex";
  } else {
    profileFooter[0].style.display = "flex";
    profileFooter[1].style.display = "none";
  }
});
