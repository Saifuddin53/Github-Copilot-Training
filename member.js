function skillsMember() {
    var skills = document.getElementById("skills").value;
    var skillsArr = skills.split(",");
    var skillsList = document.getElementById("skillsList");
    skillsList.innerHTML = "";
    skillsArr.forEach(function (skill) {
        var skillItem = document.createElement("li");
        skillItem.innerHTML = skill;
        skillsList.appendChild(skillItem);
    });
}