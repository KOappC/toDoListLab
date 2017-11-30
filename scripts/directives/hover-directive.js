(function() {
    function hoverDirective() {
        return {
            restrict: "A",
            link: function($scope, $element, $attrs) {
                $element.on("mouseover", function() {
                    $element.css("color", "#FF0000").css("transition", "0.3s")
                });
                $element.on("mouseleave", function() {
                    $element.css("color", "#000").css("transition", "0.3s")
                });
            }
        };
    }


    angular
        .module("app")
        .directive("hoverDirective", hoverDirective)
})();