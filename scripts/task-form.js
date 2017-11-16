(function() {
    var taskForm = {
        controller: "FormController",
        template: `
        <div class="totalList">
        <div class="listTitle">
            <p id="toDoTitle">TODO List</p>
            <p id="toDoSubtitle">A place to store the things you have to do!</p>
        </div>

        <input type="text" ng-model="searchToDo" placeholder="Filter your to-dos">
        
        <task-list></task-list>
        
        <input type="text" ng-model="$ctrl.newToDo" placeholder="Add you to-do">
        <button type="button" ng-click="$ctrl.addToDo($ctrl.newToDo)" hover-pink-directive="">Add</button>
    </div>
        `
    };




    angular
        .module("moduleApp")
        .component("taskForm", taskForm);
})();