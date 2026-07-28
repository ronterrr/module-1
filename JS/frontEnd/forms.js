document.getElementById("form-1").addEventListener("submit", submitForm);

function submitForm(event){
    event.preventDefault();
}

/*
MINI EXERCISE

1. Create an HTML form with 2 inputs and a submit button.
2. Attach the submit event listener.
3. Prevent form default behaviour.
4. Print out the values of your form inputs.
*/

const userForm = document.getElementById("form-1");
const userName = document.getElementById("user-name");
const userMail = document.getElementById("user-mail");

userForm.addEventListener('submit', (event) => {
    event.preventDefault();

    alert(`
        User Name: ${userName.value}
        User Email: ${userMail.value}`);
})