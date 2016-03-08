        function employee(first, last, email, ssn){
            this.first="";
            this.last="";
            this.email="";
            this.ssn=0;
            this.info=first + " " + last + " " + email + " " + ssn;
            this.set_first=function(new_first){
                this.first=new_first;  
            };
            this.set_last=function(new_last){
                this.last=new_last;
            };
            this.set_email=function(new_email){
                this.email=new_email;  
            };
            this.set_ssn=function(new_ssn){
                this.ssn=new_ssn;
            };
            this.showInfo=function(){
                this.info="You have entered: <br>Name: " + this.first + " " + this.last + "<br>Email: " + this.email + "<br>Social Security Number: " + this.ssn;
//                alert(this.info);
                document.write(this.info);
                
            document.write('<br><br><input id="btnholder" type = "button" value="Continue?"/>');
            document.getElementById("btnholder").onclick = function () {
        location.href = "index.html";
    };
          
        }
        }
        function userInput(){
            var emp = new employee();
            var empl = {
                first_name: emp.set_first(document.getElementById('first_name').value),
                last_name: emp.set_last(document.getElementById('last_name').value), 
                email: emp.set_email(document.getElementById('email').value),
                ssn: emp.set_ssn(document.getElementById('ssn').value)
            }
            
//            emp.set_first(document.getElementById('first_name').value);
//            emp.set_last(document.getElementById('last_name').value);
//            emp.set_email(document.getElementById('email').value);
//            emp.set_ssn(document.getElementById('ssn').value);
            emp.showInfo();
            emp.set_first("");
            emp.set_last("");
            emp.set_email("");
            emp.set_ssn(0);
        }