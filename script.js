function agecalculate() {
    var getname = document.getElementById("name").value;
    var getdate = document.getElementById("date").value;
    var getmonth = document.getElementById("month").value;
    var getyear = document.getElementById("year").value;



    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();

    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(getdate > d) {
        d2 = d2 + month[m2 - 1];
        m2  = m2 -1;
    }

    if(getmonth > m) {
        m2 = m2 + 12;
        y2 = y2 -1;
    }
   
    var n = getname;  
    var d = d2 - getdate;
    var m = m2 - getmonth;
    var y = y2 - getyear;

    document.getElementById("agecalculate").innerHTML = "Mr/Mrs" + " " + n + " " + "Your Age is" + " "  + y + " " + "Year" + " " +  -m  + " " + "Month" + " " +  -d  + " " +"days";  
}
