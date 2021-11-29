function validate() {

    var reg1 = /[a-zA-Z]{2,100}/i;
    var name = document.getElementById("name").value;

    if (reg1.test(name)) {
        document.getElementById("value1").innerHTML = "Valid"
        document.getElementById("value1").style.visibility = "visible"
        document.getElementById("value1").style.color = "green"

    }
    else {
        if (name.trim() == "") {
            document.getElementById("valuee1").innerHTML = "Please enter valid Name"
            document.getElementById("valuee1").style.visibility = "visible"
            document.getElementById("valuee1").style.color = "Red"

        }
        else {
            document.getElementById("valuee1").innerHTML = "InValid"
            document.getElementById("valuee1").style.visibility = "visible"
            document.getElementById("valuee1").style.color = "Red"
        }

    }

    var reg2 = /[a-zA-Z]{2,100}/i;
    var fathername = document.getElementById("fname").value;

    if (reg2.test(fathername)) {
        document.getElementById("value2").innerHTML = "Valid"
        document.getElementById("value2").style.visibility = "visible"
        document.getElementById("value2").style.color = "green"
    }

    else {
        if (fathername.trim() == "") {
            document.getElementById("value2").innerHTML = "Please Enter the last name"
            document.getElementById("value2").style.visibility = "visible"
            document.getElementById("value2").style.color = "red"
        }
        else {
            document.getElementById("value2").innerHTML = "Invalid"
            document.getElementById("value2").style.visibility = "visible"
            document.getElementById("value2").style.color = "red"
        }
}

    var reg4 = /^([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)\d{4}$/;
var dob = document.getElementById("dob").value
if (reg4.test(dob)) {
    document.getElementById("value4").innerHTML = "Valid"
    document.getElementById("value4").style.visibility = "visible"
    document.getElementById("value4").style.color = "green"
}
else {
    if (dob.trim() =="") {
        document.getElementById("value4").innerHTML = "Please enter valid DOB"
        document.getElementById("value4").style.visibility = "visible"
        document.getElementById("value4").style.color = "red"
    }
    else {
        document.getElementById("value4").innerHTML = "Invalid"
        document.getElementById("value4").style.visibility = "visible"
        document.getElementById("value4").style.color = "red"
    }
}
    var reg3 = /^[6-9][0-9]{9}$/;
    var num = document.getElementById("mobnum").value;

    if (reg3.test(num)) {
        document.getElementById("value5").innerHTML = "Valid"
        document.getElementById("value5").style.visibility = "visible"
        document.getElementById("value5").style.color = "green"
        false;
    }
    else {
        if (num.trim() == "") {
            document.getElementById("value5").innerHTML = "Please enter valid MobileNumber"
            document.getElementById("value5").style.visibility = "visible"
            document.getElementById("value5").style.color = "red"
        }
        else {
            document.getElementById("value5").innerHTML = "Please enter valid MobileNumber"
            document.getElementById("value5").style.visibility = "visible"
            document.getElementById("value5").style.color = "red"
        }
    }
var reg5 = /[0-9]{6}/;
var code = document.getElementById("pincode").value;
if (reg5.test(code)) {
    document.getElementById("value8").innerHTML = "valid"
    document.getElementById("value8").style.visibility = "visible"
    document.getElementById("value8").style.color = "green"

}
else {

    if (code.trim() == "") {
        document.getElementById("value8").innerHTML = "Please Enter valid Pincode"
        document.getElementById("value8").style.visibility = "visible"
        document.getElementById("value8").style.color = "red"

    }
    else {
        document.getElementById("value8").innerHTML = "InValid"
        document.getElementById("value8").style.visibility = "visible"
        document.getElementById("value8").style.color = "Red"

    }
}

var reg6 = /^([a-z 0-9\.-]+)@([a-z A-Z 0-9 _]+).([a-z]+).(.[a-z]{2,9})?$/;
var mail = document.getElementById("email").value;


if (reg6.test(mail)) {
    document.getElementById("value3").innerHTML = "Valid"
    document.getElementById("value3").style.visibility = "visible"
    document.getElementById("value3").style.color = "green"

}
else {

    if (mail.trim() == "") {
        document.getElementById("value3").innerHTML = "Please enter valid MailId "
        document.getElementById("value3").style.visibility = "visible"
        document.getElementById("value3").style.color = "red"

    }
    else {
        document.getElementById("value3").innerHTML = "InValid"
        document.getElementById("value3").style.visibility = "visible"
        document.getElementById("value3").style.color = "red"

    }

}
function sameAdd()
{
    var add1=document.getElementById("address1").value;
    address4.value=add1
    var add2=document.getElementById("address2").value;
    address5.value=add2
    var add3=document.getElementById("address3").value;
    address6.value=add3
    var add4=document.getElementById("value8").value;
    pincode.value=add4
}
}