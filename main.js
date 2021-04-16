function login() {

    var name1 = document.getElementById("player_1_name").value;
    var name2 = document.getElementById("player_2_name").value;

    localStorage.setItem("player_1_name" , name1);
    localStorage.setItem("player_2_name" , name2);

    window.location = "quiz_game.html";
}