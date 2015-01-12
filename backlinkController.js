/* LIMRA GRID */

app.controller("tableCtrl", ['$scope',function($scope) {    
        $scope.myImage = "images/rightarrow.png";
        $scope.config = {
           title:'Table Demo',
           tableCls:'tableCls',
           enableSorting:false,
           headerConfig:[ { headerLabel : 'Name', fieldName : 'field1', css : 'headerclass', template : 'images/rightarrow.png' } , 
                          { headerLabel : 'Employee', fieldName : 'field2', css : 'headerclass1', template : 'images/rightarrow.png' },
                          { headerLabel : 'Head Office', fieldName : 'field3', css : 'headerclass2', template : 'images/rightarrow.png' }],
          /* data:  [{name:'Tata Consultancy Services (TCS)', age :'150000', dept:'Bangalore'},
                   {name:'Infosys Technologies', age :'125000', dept:'Chennai'},
                   {name:'Wipro', age :'115000', dept:'Hyderabad'},
                   {name:'Cognizant Technologies', age :'100000', dept:'Pune'}],*/
            data:  [{field1:'Tata Consultancy Services (TCS)', field2 :'150000', field3:'Bangalore'},
                   {field1:'Infosys Technologies', field2 :'125000', field3:'Chennai'},
                   {field1:'Wipro', field2 :'115000', field3:'Hyderabad'},
                   {field1:'Cognizant Technologies', field2 :'100000', field3:'Pune'}],
           eventHandler:$scope.test        
        };
        $scope.test = function(){
            console.log("TEST");
        };
        $scope.sort = {
                column: 'b',
                descending: false
            };

            $scope.selectedCls = function(column) {
                return column == scope.sort.column && 'sort-' + scope.sort.descending;
            };
            
            $scope.changeSorting = function(column) {
                console.log("changeSorting ", column);
                var sort = scope.sort;
                if (sort.column == column) {
                    sort.descending = !sort.descending;
                } else {
                    sort.column = column;
                    sort.descending = false;
                }
            };  
 }]);