function validateForm() {
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
  
    let correct = 1;
  
    if (firstName === "" || lastName === "" || email === "" || address === "") {
      alert("Please fill out all required fields.");
      correct = 0;
      return false;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      correct = 0;
      return false;
    }
  
    if (correct === 1) {
      alert("Form submitted successfully!");
    }
  
    return true;
  }
  