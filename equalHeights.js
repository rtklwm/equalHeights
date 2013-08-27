/*global window, $, jQuery*/
(function ($) {
    "use strict";
    $.fn.equalHeights = function () {
        var self = this,
            nodeObjects = [],
            heights = [],
            tallest;
        $(window).on("load resize", function () {
            self.children().each(function (i) {
                $(this).css("height", "");
                var height = $(this).height(),
                    paddingTop = Math.ceil(parseFloat($(this).css("padding-top"))),
                    paddingBottom = Math.ceil(parseFloat($(this).css("padding-bottom"))),
                    borderTop = Math.ceil(parseFloat($(this).css("border-top-width"))),
                    borderBottom = Math.ceil(parseFloat($(this).css("border-bottom-width"))),
                    totalHeight = height + paddingTop + paddingBottom + borderBottom + borderTop;
                nodeObjects[i] = {
                    height: height,
                    paddingTop: paddingTop,
                    paddingBottom: paddingBottom,
                    borderTop: borderTop,
                    borderBottom: borderBottom,
                    totalHeight: totalHeight
                };
                heights[i] = totalHeight;
                console.log(nodeObjects);
            });
        });
        $(window).on("load resize", function () {
            self.children().each(function (i) {
                var diff,
                    oldHeight = $(this).height(),
                    newHeight;
                tallest = Math.max.apply(Math, heights);
                diff = tallest - nodeObjects[i].totalHeight;
                newHeight = oldHeight + diff;
                $(this).height(newHeight);
            });
        });
    };
}(jQuery));