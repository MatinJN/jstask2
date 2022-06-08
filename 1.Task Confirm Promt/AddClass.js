function AddClass() {
    var classname = document.getElementById('input').value;
    var span = document.getElementById('class');
    

    span.innerHTML = classname;
    

    if(classname[1] == '1'){
        classname.style.color = 'red'
    }
    else{
        classname.style.color = 'yellow'
    }


}
