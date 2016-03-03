//$(document).ready(function displayOutput() {
//    $("#submit").click(
//        function() {
//            var first_name = document.getElementById("first_name").value;
//            if (first_name.length === 0) {
//                alert("Please enter a valid input");
//                return;
//            }
//            
//            var last_name = document.getElementById("last_name").value;
//            if (last_name.length === 0) {
//                alert("Please enter a valid input");
//                return;
//            }
//            
//            var email = document.getElementById("email").value;
//            if (email.length === 0) {
//                alert("Please enter a valid input");
//                return;
//            }
//            
//            var cust_num = document.getElementById("cust_num").value;
//            if (cust_num.length === 0) {
//                alert("Please enter a valid input");
//                return;
//            }
//            
//            var html_string = "You have entered: <br>" + "Name: " + first_name + " " + last_name + "<br>Email: " + email + "<br>Customer number: " + cust_num; 
//            
//           document.getElementById("result").innerHTML = html_string;
//
//           document.getElementById('btnHolder').innerHTML = '<input type="button" value="Continue?" />'
//
//           document.getElementById("btnHolder").onclick = function () {
//            location.href = "index.html";
//            };
//        } //end function
//        ) //end click
//});


var substance = function(){ // This line to the line with "}();" creates a Closure.
    // private data
    var data = {            // This is an exmaple of a javaScript Object.
        name:'Substance',
        $name: function(n){
            data.memo += 1; // This, and the object entry "memo: 0" below is an example of Memoization where a function can
                            // keep track of some prior behavior.
            data.name = n },
        memo: 0,
        dob: new Date('January 1, 1980'),
        $dob: function(n){data.memo += 1; data.dob = n},
        says:"Hello, I'm a substance",
        $says: function(n){data.memo += 1; data.says = n},
        quality: 'Virtue',
        $quality: function(n){data.memo += 1; data.quality = n}
    };

    var F = function(){};
    f = new F();            // This is an example of the conflicted nature of JavaScript.
                            // In the words of Douglas Crockford, "JavaScript itself is not confident in its prototypal nature,
                            // so it offers an object-making syntax that is reminiscent of the classical oo languages. Few
                            // classical progrmmers found prototypal inheritance to be acceptable and classically inspired
                            // syntax obscures the language's true nature. It is the worst of both worlds.

    // public data
    f.sname = 'Substance'
    f.run = function (e) {
        return data[e];
    };

    return f;
}();                        // This is an example of Function Application.

var customer = function(cust){
    // private data
    var data = {
        first_name: "first name",
        last_name: "last name",
        email: "email",
        cust_num: 0
    };

    var F = function(){};
    F.prototype = cust;        // The prototype property sets up Inheritance.
    f = new F();

    // public data
    f.first_name = 'John'
    f.run = function (e) {
        var r = data[e];
        if(r === undefined) return F.prototype.run(e);
        else return r;
    };

    return f;
}(substance);

//var cat = function(p){
//    // private data
//    var data = {
//        name:'Cat',
//        $name: function(n){data.memo += 1; data.name = n},
//        memo: 0,
//        dob: new Date('January 1, 2000'),
//        $dob: function(n){data.memo += 1; data.dob = n},
//        says:"Hello, I'm a cat",
//        //$says: function(n){data.memo += 1; data.says = n}
//    };
//
//    var F = function(){};
//    F.prototype = p;
//    f = new F();
//
//    // public data
//    f.cname = 'Cat'
//    f.run = function (e) {
//        var r = data[e];
//        if(r === undefined) return F.prototype.run(e);
//        else return r;
//    };
//
//    return f;
//}(animal);

var human = function(cust){
    // private data
    var data = {
        name:'Human',
        $name: function(n){data.memo += 1; data.name = n},
        memo: 0,
        dob: new Date('January 1, 2010'),
        $dob: function(n){data.memo += 1; data.dob = n},
        says:"Hello, I'm a human",
        //$says: function(n){data.memo += 1; data.says = n}
    };

    var F = function(){};
    F.prototype = p;
    f = new F();

    // public data
    f.hname = 'Human'
    f.run = function (e) {
        var r = data[e];
        if(r === undefined) return F.prototype.run(e);
        else return r;
    };
    f.age = (new Date()).getFullYear() - f.run('dob').getFullYear();

    return f;
}(customer);

var a1 = Object.create(customer);

document.writeln(Object.getPrototypeOf(a1) + "<BR>");
document.writeln(a1.sname + "<BR>");
document.writeln(a1.run('says') + "<BR>");
a1.run('$name')('a1');
document.writeln(a1.run('name') + "<BR>");

var myCat = Object.create(cat);

document.writeln("<BR>");
document.writeln(Object.getPrototypeOf(myCat) + "<BR>");
document.writeln(myCat.sname + "<BR>");
document.writeln(myCat.run('says') + "<BR>");
document.writeln(myCat.run('quality') + "<BR>");
myCat.run('$name')('myCat');
document.writeln(myCat.run('name') + "<BR>");

var socrates = Object.create(human);




// Polymorphism
document.writeln("<BR>" + "You entered: <BR>");
a1.speak = function(a){ document.writeln(a.run('says') + "<BR>"); }
document.writeln("<BR>");
a1.speak(a1);
a1.speak(myCat);
a1.speak(socrates);