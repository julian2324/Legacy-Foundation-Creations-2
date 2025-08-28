const hamburger =
document.getElementById('hamburger');
const navMenu =
document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});


function offers() {
const offers= document.getElementById("ourOffers")
offers.innerHTML =  "dance all night! and all day non stop! <br>and dance all night!"
}
