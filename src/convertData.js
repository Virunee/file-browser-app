import treedata from './treedata';

var arr = [];
    Object.keys(treedata).forEach(function(key) {
      arr.push(treedata[key]);
    });

  function convert(array){
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

    return map['-'].children;

}

export var convertedTreeData = convert(arr);

