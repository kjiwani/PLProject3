$(document).ready(function displayOutput() {
            var first_name = document.getElementById("first_name").value;
            if (first_name.length === 0) {
                alert("Please enter a valid input");
                return;
            }
            
            var last_name = document.getElementById("last_name").value;
            if (last_name.length === 0) {
                alert("Please enter a valid input");
                return;
            }
            
            var email = document.getElementById("email").value;
            if (email.length === 0) {
                alert("Please enter a valid input");
                return;
            }
            
            var ssn = document.getElementById("cust_num").value;
            if (cust_num.length === 0) {
                alert("Please enter a valid input");
                return;
            }
            
            var html_string = "You have entered: <br>" + "Name: " + first_name + " " + last_name + "<br>Email: " + email + "<br>Social Security Number: " + ssn; 

            
           document.getElementById("result").innerHTML = html_string;
        
            document.getElementById('btnHolder').innerHTML = '<input type="button" value="Continue?" />'

        document.getElementById("btnHolder").onclick = function () {
        location.href = "index.html";
    };
            
        };