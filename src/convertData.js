import treedata from './treedata';

var arr = [];
    Object.keys(treedata).forEach(function(key) {
      arr.push(treedata[key]);
    });

function search(array, searchterm) {
  var result = [];
  for(var i=0;i<array.length;i++) {
    if(searchterm === array[i].title) {
      result.unshift(array[i]);
      if (array[i].parentId) {
        var parent = array[i].parentId;
        for(var i=0;i<array.length;i++) {
          if(parent === array[i].id) {
            result.unshift(array[i]);
          }

        }
      }
    }
  }
  return result
}

var searchResult = search(arr, "Due Diligence");

  function list_to_tree(array){
    var map = {};
    for(var i = 0; i < array.length; i++){
        var obj = array[i];
        obj.children= [];

        map[obj.id] = obj;

        var parent = obj.parentId || '-';
        if(!map[parent]){
            map[parent] = {
              children: []
            };
        }
        map[parent].children.push(obj);
    }
    console.log(map);
    return map['-'].children;

}

export var convertedTreeData = list_to_tree(arr);

