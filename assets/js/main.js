function follow_clicked() {
    var follow_list = document.getElementById("follow_list");
    console.log(follow_list.style.display);
    if (follow_list.style.display == "block") {
        follow_list.style.display = "none";
    } else {
        follow_list.style.display = "block";
    }
}