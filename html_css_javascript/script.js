document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var checkInDate = document.getElementById("checkInDate").value;
    var checkOutDate = document.getElementById("checkOutDate").value;

    // Store data in sessionStorage (you can use other methods like localStorage or pass data through URL)
    sessionStorage.setItem("fullName", fullName);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("phone", phone);
    sessionStorage.setItem("checkInDate", checkInDate);
    sessionStorage.setItem("checkOutDate", checkOutDate);
    
   
     
    // Redirect to another page
    window.location.href = "customer_info.html";
});




