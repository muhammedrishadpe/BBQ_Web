let emailCollectorForm = document.getElementById("Email-Collector");
emailCollectorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  //Do somthing with the event
  console.log("The event is firing");

  let ourFormData = new FormData(event.target);

  let userFirstName = ourFormData.get("firstName");

  let updatedHtmlContent = `
            <h2>Congratulations, ${userFirstName}!</h2>

            <p>You're on your way to becoming a BBQ Master!</p>
            
            <p class="fine-print">We'll never share your information without your permission</p>

            <button id="exploreBtn" class="btn btn-primary">Explore</button>
        `;
  let ourMainContent = document.getElementById("main-content");
  ourMainContent.innerHTML = updatedHtmlContent;

  // Add event listener for the Explore button
  let exploreBtn = document.getElementById("exploreBtn");
  exploreBtn.addEventListener("click", () => {
    window.location.href = "./pages/main.html";
  });
});
