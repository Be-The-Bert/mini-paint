$(document).ready(function() {
    var box = $('.box');
    var reset = $('#reset');
    var red = $('#red');
    var green = $('#green');
    var blue = $('#blue');
    var yellow = $('#yellow');
    var white = $('#white');
    var colors = 'red green blue yellow white';

    var selectedColor = 'white';

var flag = true;
    box.on('mousedown', function() {
        
        if (flag) {
            box.on('mouseover', function() {
                $(this).addClass(selectedColor);
            });
            
        }
        box.on('mouseup', function() {
            flag = false;
        });
    });
    box.on('dblclick', function() {
        $(this).removeClass(selectedColor);
    });
    reset.on('click', function() {
        box.removeClass();
    });
    red.on('click', function() {
        selectedColor = 'red';
    });
    green.on('click', function() {
        selectedColor = 'green';
    });
    blue.on('click', function() {
        selectedColor = 'blue';
    });
    yellow.on('click', function() {
        selectedColor = 'yellow';
    });
    white.on('click', function() {
        selectedColor = 'white';
    });








})