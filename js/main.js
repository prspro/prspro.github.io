"use strict";

// Main JS module
$(document).ready(function () {
  //
  var cols = $('.col');
  var links = $('.link'); //

  cols.on('click', function () {
    cols.not($(this)).removeClass('col--opened');
    cols.find(links).removeClass('link--shown');
    $(this).addClass("col--opened");
    $(this).find(links).addClass('link--shown');
  });
});