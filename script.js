<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Simple JS Job Test</title>

</head>

<body>

    <h2>Job Application Form</h2>

    <form id="jobForm">

        <label for="name">Name:</label>

        <input type="text" id="name" required>

        <br><br>

        <label for="email">Email:</label>

        <input type="email" id="email" required>

        <br><br>

        <button type="submit">Submit</button>

    </form>

    <p id="message"></p>

    <script>

        // Select the form and message paragraph

        const form = document.getElementById('jobForm');

        const message = document.getElementById('message');

        // Function to validate the form

        function validateForm(event) {

            event.preventDefault(); // Prevent form from submitting

            const name = document.getElementById('name').value;

            const email = document.getElementById('email').value;

            if(name === "" || email === "") {

                message.textContent = "Please fill in all fields.";

                message.style.color = "red";

            } else {

                message.textContent = `Thank you, ${name}! Your application has been submitted.`;

                message.style.color = "green";

                // Clear the form

                form.reset();

            }

        }

        // Add event listener to the form

        form.addEventListener('submit', validateForm);

    </script>

</body>

</html>