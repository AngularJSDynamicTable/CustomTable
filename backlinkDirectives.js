app.directive('vmfTable', ['$compile','$templateCache', function( $compile, $templateCache) {
    return {
        restrict: 'EA',

        scope: {
            title: '=',
            options: '=',
            name: '=',
            model: '=',
            data: '='           
        },
        /*template :'<span  ng-repeat="item in headers">'+
                    '<li> {{item}} </li>'+
                    '</span>',*/
        // template:'<span>{{linkCls}}</span>',       
        template: '<div class={{tableCls}} ng-bind-html="{deliberatelyTrustDangerousSnippet()}"><span>show <select ng-model="noOfRecordsPerPage"> <option ng-repeat="item in noOfRecords" value="{{item}}">{{item}}</option> </select> entries </span>' +
                  '<span class="spanRight">Search : <input ng-model="searchKeyword"/></span>'+
                  '<div ng-include="tableUrl"></div>' +
                  '<div><span>Showing {{1}} to {{10}} of {{57}} entries </span>'+
                  //'<span ng-repeat'
                  '</div>' + 
                  '</div>',
        link: function(scope, elem, attrs) {
            
        	// STATING POINT FOR DIRECTIVE
        	console.log("BACKLIST DIRECTIVE ", scope, elem, attrs); 
            var settings = scope.options;
            scope.tableCls = settings.tableCls; 
            scope.headers = settings.headerConfig;
            scope.orderByField = 'field3'
            scope.reverseSort = false;
           
            scope.datas = settings.data;
            scope.noOfRecords = [10,25,50,100];
            scope.noOfRecordsPerPage = 10;
            

            if(settings.enableSorting){
                scope.tableUrl = "template/tableBasic/sortingTable.html";
            } else{
                scope.tableUrl = "template/tableBasic/basicTable.html";
            }
        	// Default Configuration    
        	var config = {
				
			}

            elem.html(template).show();
            $compile(elem.contents())(scope); 

            /*scope.sort = {
                column: 'b',
                descending: false
            };

            scope.selectedCls = function(column) {
                return column == scope.sort.column && 'sort-' + scope.sort.descending;
            };
            
            scope.changeSorting = function(column) {
                console.log("changeSorting ", column);
                var sort = scope.sort;
                if (sort.column == column) {
                    sort.descending = !sort.descending;
                } else {
                    sort.column = column;
                    sort.descending = false;
                }
            };  */
        }           
    }
}])

app.run(function($templateCache){
    $templateCache.put("template/tableBasic/basicTable.html",
                '<table>' +
                    '<thead>' +
                     '<tr> '+
                        '<th ng-repeat="item in headers">{{item.headerLabel}}</th>' +
                     '</tr>'+
                    '</thead>>' +
                    '<tbody>' +
                     '<tr ng-repeat="item in datas | filter: searchKeyword"> '+
                        '<td class={{headers[0].css}} >{{item.field1}} <img ng-src={{headers[0].template}} ></img> </td><td class={{headers[1].css}}>{{item.field2}} <img ng-src="{{headers[1].template}}" /></td><td class={{headers[2].css}}>{{item.field3}} <img ng-src="{{headers[2].template}}" /></td>'+
                     '</tr>'+
                    '</tbody>>' +
                '</table>');
});

app.run(function($templateCache){
    $templateCache.put("template/tableBasic/sortingTable.html",
                '<table>' +
                    '<thead>' +
                     '<tr> '+
                        '<th ng-repeat="item in headers"><a href="#" ng-click="orderByField=\'{{item.fieldName}}\'; reverseSort = !reverseSort">{{item.headerLabel}}</a></th>' +
                     '</tr>'+
                    '</thead>>' +
                    '<tbody>' +
                     '<tr ng-repeat="item in datas | orderBy:orderByField | filter: searchKeyword" class={{headers[$index].css}}> '+
                        '<td class={{headers[0].css}} >{{item.field1}} <img ng-src={{headers[0].template}} ></img> </td><td class={{headers[1].css}}>{{item.field2}} <img ng-src="{{headers[1].template}}" /></td><td class={{headers[2].css}}>{{item.field3}} <img ng-src="{{headers[2].template}}" /></td>'+
                     '</tr>'+
                    '</tbody>>' +
                '</table>');
});