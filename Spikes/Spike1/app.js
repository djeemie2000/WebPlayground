(function(){
var app = angular.module('myApp', []);

app.controller('MyController', function MyController(){
    //alert('Test!');

    this.someVar = {
       name : 'etc',
       value : 15.7,
       minValue : 2.9,
       maxValue : 19.99,
       type : 'float'
    }

    this.patches = {
      patches : [
          {
            name: 'name1',
            path: 'path/name1'
          },
          {
            name: 'name2',
            path: 'path/name2'
          },
          {
            name: 'name3',
            path: 'path/name3'
          },
          {
            name: 'name4',
            path: 'path/name4'
          },
          {
            name: 'name5',
            path: 'path/name5'
          }
      ]
    }
});

})();
