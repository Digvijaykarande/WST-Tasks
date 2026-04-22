document.getElementById("empForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("empName").value.trim();
    let email = document.getElementById("empEmail").value.trim();

    if (name === "") {
        alert("Employee name is required");
        return;
    }

    alert("Employee form submitted successfully");
});
