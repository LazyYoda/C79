var namesarray = [];

function submitname() {
    var name1 = document.getElementById("input1").value;
    var name2 = document.getElementById("input2").value;
    var name3 = document.getElementById("input3").value;
    var name4 = document.getElementById("input4").value;
    namesarray.push(name1);
    namesarray.push(name2);
    namesarray.push(name3);
    namesarray.push(name4);
    document.getElementById("arrayh3").innerHTML = namesarray;
    namesarray.sort();
    console.log(namesarray);
    document.getElementById("submitbutton").style.display = "none";
}