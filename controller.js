(function() {
    function FormController() {
        var vm = this;
        vm.toDoList = ["Grocery Shop", "Laundry", "Get Gas", "Vacuum"];
        vm.addToDo = function(index) {
            vm.toDoList.push(index);
            vm.newToDo = "";
        };
        vm.removeToDo = function(index) {
            vm.toDoList.splice(index, 1)
        };
    }




    angular
        .module("moduleApp")
        .controller("FormController", FormController)
})();