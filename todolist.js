

function addItems() {
  var checkedItems = document.querySelectorAll('.tasksCheckbox:checked');
  var completedTemplate = '';
  for(var i =0;i<checkedItems.length;i++) {
    
        var result = (checkedItems[i].value).strike();
    completedTemplate = completedTemplate + '' + '<li>'+checkedItems[i].value +'</li>';

  }
  document.getElementById('completed').innerHTML = completedTemplate;
}



function deleteItems(){

  var checkedItems = document.querySelectorAll('.tasksCheckbox:checked');

  for(var i =0;i<checkedItems.length;i++) {
    checkedItems[i].parentNode.remove();

  }

}
