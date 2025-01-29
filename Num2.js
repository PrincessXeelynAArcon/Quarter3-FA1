        var firstName = prompt("Enter First Name: ", "0");
        var lastName = prompt("Enter Last Name: ", "0");
        var birthYear = prompt("Enter Birth Year : ", "0");
        var year = 2025;
        var age = year-birthYear;

        var m =  "Hello " + firstName + " " + lastName + "! " + "How does it feel to be" + " " + age +  " " + "years old?";
        document.getElementById("result").innerText = m

