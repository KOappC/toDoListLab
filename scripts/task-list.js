(function() {
    var taskList = {
        controller: "FormController",
        template: `
        <ol>
            <li ng-repeat="things in $ctrl.toDoList | filter: searchToDo track by $index"> {{ things }} <i ng-click="$ctrl.removeToDo($index)" class="material-icons md-18" hover-directive>clear</i></li>
        </ol>
        `
    };

    angular
        .module("moduleApp")
        .component("taskList", taskList);
})();