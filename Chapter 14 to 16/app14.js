
function mobile(){
    var select = document.getElementById("selectNumber");
    var options = ["Apple","Samsung","Motorola","Nokia","Sony & Haier"];
    for(var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
    document.getElementById("favorite").innerHTML = select.options[select.selectedIndex].text+".";

}