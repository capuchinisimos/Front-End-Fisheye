function installDisplayModal() { // eslint-disable-line
    const displayModal = document.querySelector("#contact_modal");

    displayModal.addEventListener("click", () => {
        console.log("test");
        const modal = document.querySelector(".modal");
        const closeBtn = document.getElementsByClassName("close")[0];
        const firstNameInput = document.getElementById("firstname");
        const lastNameInput = document.getElementById("lastname");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");
        const submitButton = document.getElementById("form-submit-button");
        submitButton.addEventListener("click", function (event) {
            event.preventDefault();
            console.log(
                `L'utilisateur ${firstNameInput.value} ${lastNameInput.value} avec l'adresse mail suivante ${emailInput.value} vous adresse le message suivant : ${messageInput.value}`
            );
            modal.style.display = "none";
        });
        modal.style.display = "block";

        closeBtn.onclick = function () {
            modal.style.display = "none";
        };

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
        document.addEventListener("keydown", function (e) {
            let keyCode = e.key;
            if (keyCode === "Escape") {
                modal.style.display = "none";
            }
        });
    });
}
