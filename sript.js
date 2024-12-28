// Add Item Functionality
document.getElementById("addItemButton").addEventListener("click", function() {
  const name = document.getElementById("name").value;
  const category = document.getElementById("category").value;
  const year = document.getElementById("year").value;

  if (name && category && year) {
    const tableBody = document.getElementById("tableBody");
    const row = tableBody.insertRow();
    
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);

    cell1.textContent = tableBody.rows.length; // Serial number
    cell2.textContent = name;
    cell3.textContent = category;
    cell4.textContent = year;
    cell5.innerHTML = `<button class="edit">Edit</button>`;
    cell6.innerHTML = `<button class="delete">Delete</button>`;

    // Clear form inputs
    document.getElementById("name").value = "";
    document.getElementById("category").value = "";
    document.getElementById("year").value = "";

    // Delete Item functionality
    document.querySelectorAll(".delete").forEach(button => {
      button.addEventListener("click", function() {
        button.closest("tr").remove();
      });
    });

    // Edit Item functionality
    document.querySelectorAll(".edit").forEach(button => {
      button.addEventListener("click", function() {
        const row = button.closest("tr");
        document.getElementById("name").value = row.cells[1].textContent;
        document.getElementById("category").value = row.cells[2].textContent;
        document.getElementById("year").value = row.cells[3].textContent;
        
        row.remove(); // Remove the edited item row
      });
    });
  } else {
    alert("Please fill in all fields.");
  }
});

// Search Functionality for Table
document.getElementById("searchInput").addEventListener("input", function() {
  const query = this.value.toLowerCase();
  const rows = document.querySelectorAll("#tableBody tr");
  
  rows.forEach(row => {
    const name = row.cells[1].textContent.toLowerCase();
    const category = row.cells[2].textContent.toLowerCase();
    const year = row.cells[3].textContent.toLowerCase();

    if (name.includes(query) || category.includes(query) || year.includes(query)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});

// Cart Functionality
let itemCount = 0;
const cartIcon = document.querySelector(".cart-icon");
const itemCountElement = document.querySelector(".item-count");
const addToCartButtons = document.querySelectorAll(".products .card button");

addToCartButtons.forEach(button => {
  button.addEventListener("click", function() {
    itemCount++;
    itemCountElement.textContent = itemCount;
  });
});

// Checkout Form Functionality
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Your order has been placed successfully!");
  // You can add code to send the form data to a server or handle further actions
});
