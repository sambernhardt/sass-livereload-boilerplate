// alert("Testo change-o")

var formElements = document.querySelectorAll("form select");

formElements.forEach(element => {
  element.addEventListener("change", function(e) {
    if (e.target.tagName == "SELECT") {
      console.log(e.target);
    }
  })
})

var options = document.querySelectorAll(".selectGroup .option");
options.forEach(option => {
  option.addEventListener("click", function(e) {
    var el = e.target;
    var value = el.dataset.value;
    var parent = el.parentNode;
    var id = parent.dataset.select;
    var hiddenSelect = document.querySelector("select#"+id);
    hiddenSelect.value = value;

    console.log(parent.childNodes);
    parent.querySelectorAll(".option").forEach(child => {
      child.classList.remove("selected");
    })
    el.classList.contains("selected") ? el.classList.remove("selected") : el.classList.add("selected");

  })
});
