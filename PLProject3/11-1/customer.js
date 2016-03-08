function customer(first, last, email, cust_num){
            this.first="";
            this.last="";
            this.email="";
            this.cust_num=0;
            this.info=first + " " + last + " " + email + " " + cust_num;
            this.set_first=function(new_first){
                this.first=new_first;  
            }
            this.set_last=function(new_last){
                this.last=new_last;
            }
            this.set_email=function(new_email){
                this.email=new_email;  
            }
            this.set_custNum=function(new_custNum){
                this.cust_num=new_custNum;
            }
            this.showInfo=function(){
                this.info="You have entered: <br>Name: " + this.first + " " + this.last + "<br>Email: " + this.email + "<br>Customer number: " + this.cust_num;
                document.write(this.info);


            document.write('<br><br><input id="btnholder" type = "button" value="Continue?"/>');
            document.getElementById("btnholder").onclick = function () {
        location.href = "index.html";
    };

          
        }
        }
        function userInput(){
            var cust = new customer();
            
            var cus = {
                first_name: cust.set_first(document.getElementById('first_name').value),
                last_name: cust.set_last(document.getElementById('last_name').value),
                email: cust.set_email(document.getElementById('email').value),
                cust_num: cust.set_custNum(document.getElementById('cust_num').value)}
            
//            cust.set_first(document.getElementById('first_name').value);
//            cust.set_last(document.getElementById('last_name').value);
//            cust.set_email(document.getElementById('email').value);
//            cust.set_custNum(document.getElementById('cust_num').value);
            cust.showInfo();
            cust.set_first("");
            cust.set_last("");
            cust.set_email("");
            cust.set_custNum(0);

        }