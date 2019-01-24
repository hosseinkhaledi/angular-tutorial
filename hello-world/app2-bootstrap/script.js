function update() {
    var fullName = $("#firstName").val() + " " + $("#lastName").val();
    $("#fullName").text(fullName);
}
$("#firstName, #lastName").bind("change keyup", function () {
    update();
});
update();
