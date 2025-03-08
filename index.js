// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("contactForm");

//     form.addEventListener("submit", function (event) {
//         event.preventDefault(); // Form submit hone se rokne ke liye

//         // Input values lena
//         const name = document.getElementById("name").value;
//         const email = document.getElementById("email").value;
//         const password = document.getElementById("password").value; // Store mat karna

//         // Data ko console me dekhne ke liye
//         console.log("Name:", name);
//         console.log("Email:", email);
//         console.log("Password:", password); // Ye sirf check karne ke liye

//         // Secure: Password ko LocalStorage me store mat kar
//         localStorage.setItem("name", name);
//         localStorage.setItem("email", email);

//         alert("Form submitted successfully!");
//     });
//     document.getElementById("btn").addEventListener("click", () => {
//         fetch("http://localhost:5000/api")
//             .then(response => response.json())
//             .then(data => {
//                 document.getElementById("output").innerText = data.message;
//             })
//             .catch(error => console.error("Error:", error));
//     });

// });

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Form submit hone se rokne ke liye

        // Input values lena
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value; // Store mat karna

        // Data ko console me dekhne ke liye
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password); // Ye sirf check karne ke liye

        // Secure: Password ko LocalStorage me store mat kar
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);

        alert("Form submitted successfully!");

        // **Backend se response lena** (yeh form submit hone ke baad backend se response lega)
        fetch("http://localhost:5000/api")
            .then(response => response.json())
            .then(data => {
                document.getElementById("output").innerText = data.message;
            })
            .catch(error => console.error("Error:", error));
    });
});
