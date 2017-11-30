(function() {
    function hoverPinkDirective() {
        return {
            restrict: "A",
            link: function($scope, $element, $attrs) {
                $element.on("mouseover", function() {
                    $element.css("background-color", "#ff1493").css("transition", "0.3s")
                });
                $element.on("mouseleave", function() {
                    $element.css("background-color", "rgba(255, 105, 180, 0.51)").css("transition", "0.3s")
                });
            }
        };
    }



    angular
        .module("app")
        .directive("hoverPinkDirective", hoverPinkDirective)
})();