(function() {
    var taskList = {
        bindings: {
            toDoList: "<",
            searchToDo: "<"
        },
        controller: "FormController",
        template: `
            <li ng-repeat="things in $ctrl.toDoList | filter: $ctrl.searchToDo track by $index"> {{ things }} <i ng-click="$ctrl.removeToDo($index)" class="material-icons md-18" hover-directive>clear</i></li>
        `
    };

    angular
        .module("moduleApp")
        .component("taskList", taskList);
})();