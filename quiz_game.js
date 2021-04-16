



function send() {
    var n1 = document.getElementById("number1").value;
    var n2 = document.getElementById("number2").value;
    actual_answer = parseInt(n1) * parseInt(n2);

    question_number = "<h4>" + n1 + " * " + n2 + "</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box' class='form-control'> ";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'> Check </button> ";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}