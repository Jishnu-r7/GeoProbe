function myFunction() {
        var x = document.getElementById("fname").value;
        document.getElementById("demo").innerHTML = x;
       window.location.href = "res.html?greeting="+x;
   }
