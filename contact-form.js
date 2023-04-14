export default function contactForm() {
  const d = document,
    $contactForm = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

  $contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    let options = {
      method: "POST",
      body: new FormData(e.target),
    };

    fetch("https://formsubmit.co/ajax/eduardofreites1999@gmail.com", options)
      .then((res) => {
        res.ok ? res.json() : Promise.reject(res);
      })
      .then((json) => {
        location.hash = "#thx";
        $contactForm.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "An error has occurred, please try again later";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status}: ${message}`;
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3500);
      });
  });
}
