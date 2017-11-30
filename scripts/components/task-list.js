(function() {
    var taskList = {
        bindings: {
            toDoList: "<",
            searchToDo: "<"
        },
        controller: function(TaskService) {
            var $ctrl = this;
            $ctrl.editTask = function(newTask, index) {
                TaskService.editTask(newTask, index).then(function(response) {
                    console.log(response);
                });
            };
            $ctrl.removeToDo = function(index) {
                $ctrl.toDoList.splice(index, 1);
                TaskService.deleteTask(index).then(function(response) {
                    console.log(response)
                })
            }
        },
        template: `
            <li ng-repeat="things in $ctrl.toDoList | filter: $ctrl.searchToDo track by $index"> <input ng-blur="$ctrl.editTask(things, $index);" ng-model="things"> <i ng-click="$ctrl.removeToDo($index)" class="material-icons md-18" hover-directive>clear</i></li>
        `
    };

    angular
        .module("app")
        .component("taskList", taskList);
})();