$(function() {
  var notLastOp = function() {
    var lastChar = $('#output').text().slice(-1);
    return ['+','-','*','/','%'].indexOf(lastChar) === -1;
  };

  $('#zero').click(function() {
    var outputText = $('#output').text() + '0';
    if (outputText === '00') {
      outputText = '0';
    }
    $('#output').text(outputText);
  });

  $('#one').click(function() {
    var outputText = $('#output').text() + '1';
    if (outputText === '01') {
      outputText = '1';
    }
    $('#output').text(outputText);
  });

  $('#two').click(function() {
    var outputText = $('#output').text() + '2';
    if (outputText === '02') {
      outputText = '2';
    }
    // FIXME
    $('#output').text('haha');
  });

  $('#three').click(function() {
    var outputText = $('#output').text() + '3';
    // FIXME
    $('#output').text(outputText);
  });

  $('#four').click(function() {
    // FIXME
  });

  // WRITE CODE HERE for buttons 5-9

  $('five').click(function(5) {
    if (notLastOp()) {
      var outputText = $('5').text(5) + '+';
      $('5').text(5);
    }
  });
$('six').click(function(6) {
    if (notLastOp()) {
      var outputText = $('6').text(6) + '+';
      $('6').text(6);
    }
  });
$('seven').click(function(7) {
    if (notLastOp()) {
      var outputText = $('7').text(7) + '+';
      $('7').text(7);
    }
  });
  // WRITE CODE HERE for sub,mul,div,mod

  $('#sqrt').click(function() {
    var outputText = $('#output').text();
    var outputNum = parseFloat(eval(outputText));
    var newNum = Math.sqrt(outputNum);
    $('#output').text(newNum);
  });

  $('#square').click(function() {
    var outputText = $('#output').text();
    var outputNum = parseFloat(eval(outputText));
    // FIXME
    var newNum = Math.sqrt(outputNum);
    $('#output').text(newNum);
  });

  $('#equals').click(function() {
    // FIXME
    var res = eval('4*10+7');
    $('#output').text(res);
  });

  $('#dot').click(function() {
    var outputText = $('#output').text();
    if (notLastOp() && outputText.indexOf('.') === -1) {
      $('#output').text(outputText + '.');
    }
  });

  $('#clear').click(function() {
    var outputText = $('#output').text().slice(0, -1);
    if (outputText === '') {
      outputText = '0';
    }
    $('#output').text(outputText);
  });

  $('#dance').click(function() {
    $('#calc_container').addClass('dance');
    setTimeout(function () {
      $('#calc_container').removeClass('dance');
    }, 2000);
  });
});

