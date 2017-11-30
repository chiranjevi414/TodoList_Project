

var addTask = () =>{
  var taskName = document.getElementById('task').value;
  var wrapper= document.createElement('div');
  wrapper.innerHTML = '<div class="checkbox">\
        <label><input type="checkbox" class="tasksCheckbox" value =' + taskName +' >'+ taskName +' </label>\
    </div>';
    var div= wrapper.firstChild;

  document.getElementById('beforecomplete').appendChild(div);
  document.getElementById('task').value = "";
}




var addItems = () => {
  var checkedItems = document.querySelectorAll('.tasksCheckbox:checked');

  var completedTemplate = '';
  for(var i =0;i<checkedItems.length;i++) {
  checkedItems[i].parentNode.style.textDecoration = 'line-through';
  checkedItems[i].disabled = true;
    completedTemplate = completedTemplate + '' + '<li>'+checkedItems[i].value +'</li>';

  }

  document.getElementById('completed').innerHTML = completedTemplate;
}



var deleteItems = () =>{

  var checkedItems = document.querySelectorAll('.tasksCheckbox:checked');

  for(var i =0;i<checkedItems.length;i++) {
    checkedItems[i].parentNode.remove();

  }

}
