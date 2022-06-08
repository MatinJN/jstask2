function AddClass() {
    var classname = document.getElementById('input').value;
    console.log(classname);
    var span = document.getElementById('class');

    span.innerHTML = classname;


}
