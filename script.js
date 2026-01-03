
const form = document.querySelector(".align2");


const passwordInput = document.getElementById("pws");


const inputs = form.querySelectorAll(".input");


form.addEventListener("submit", function (e) {
    // check empty fields
    for (let input of inputs) {
        if (input.type !== "date" && input.value.trim() === "") {
            alert("Please fill all required fields.");
            input.focus();
            e.preventDefault();
            return;
        }
    }


    const emailInput = form.querySelector('input[type="email"]');
    if (!emailInput.value.includes("@")) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        e.preventDefault();
        return;
    }

    if (passwordInput.value.length < 6) {
        alert("Password must be at least 6 characters long.");
        passwordInput.focus();
        e.preventDefault();
        return;
    }

    alert("Form submitted successfully!");
});

const genderCheckboxes = form.querySelectorAll(
    'input.input2[type="checkbox"]'
);

genderCheckboxes.forEach(box => {
    box.addEventListener("change", function () {
        genderCheckboxes.forEach(cb => {
            if (cb !== this) cb.checked = false;
        });
    });
});

const clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click", function (e) {
    const confirmClear = confirm("Are you sure you want to clear the form?");
    if (!confirmClear) {
        e.preventDefault();
    }
});

function forgotPassword() {
    const email = prompt("Enter your email address:");
    if (!email) return;

    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return;
    }
    alert(
        "If this email is registered, a password reset link has been sent."
    );
}
