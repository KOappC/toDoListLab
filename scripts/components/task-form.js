(function() {
    var taskForm = {
        controller: function(TaskService) {
            var $ctrl = this;
            $ctrl.toDoList = ["Grocery Shop", "Laundry", "Get Gas", "Vacuum"];
            $ctrl.getTasks = function() {
                TaskService.getTasks().then(function(response) {
                    console.log(response);
                })
            };
            $ctrl.addToDo = function(index) {
                $ctrl.toDoList.push(index);
                $ctrl.newToDo = "";

            }
        },
        template: `
        <div class="totalList">
            <div class="listTitle">
                <p id="toDoTitle">TODO List</p>
                <p id="toDoSubtitle">A place to store the things you have to do!</p>
            </div>

            <input type="text" ng-model="$ctrl.searchToDo" placeholder="Filter your to-dos">
            <ol>
                <task-list to-do-list="$ctrl.toDoList" search-to-do="$ctrl.searchToDo"></task-list>
            </ol>
            <input type="text" ng-model="$ctrl.newToDo" placeholder="Add your to-do">
            <button type="button" ng-click="$ctrl.addToDo($ctrl.newToDo)" hover-pink-directive="">Add</button>
        </div>
        `
    };




    angular
        .module("app")
        .component("taskForm", taskForm);
})();