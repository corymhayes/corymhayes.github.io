
'use strict';

$(document).ready(function() {

  let currentStack;
  let discNumber;
  let playerMove = null;
  let moveNumber = 0;

  $('button').click(function(){
    if($(this).attr('id') === 'easyButton'){
      $('#gameBoard').css('display', 'inline');
      $('#menuButton').css('display', 'inline');
      $('#levelSelector').hide();
      discNumber = 3;
    }

    if($(this).attr('id') === 'mediumButton'){
      $('[data-stack]').eq(0).prepend('<div data-block="125"></div><div data-block="100"></div>');
      $('#gameBoard').css('display', 'inline');
      $('#menuButton').css('display', 'inline');
      $('#levelSelector').hide();
      discNumber = 5;
    }

    if($(this).attr('id') === 'hardButton'){
      $('[data-stack]').eq(0).prepend('<div data-block="200"></div><div data-block="175"></div><div data-block="150"></div><div data-block="125"></div><div data-block="100"></div>');
      $('#gameBoard').css('display', 'inline');
      $('#menuButton').css('display', 'inline');
      $('#levelSelector').hide();
      discNumber = 8;
    }
  });

  $('[data-stack]').click(function(){
    if(playerMove === null && $(this).children().length > 0){
      playerMove = $(this).children().last().detach();
      currentStack = $(this).attr('data-stack');
    } else if($(this).children().length > 0){
      if(parseInt($(this).children().last().attr('data-block')) < parseInt(playerMove.attr('data-block'))){
        $('#moveCounter').text(++moveNumber);
        playerMove.appendTo($('[data-stack]').eq(currentStack - 1));
        playerMove = null;
      } else if(parseInt($(this).children().last().attr('data-block')) > parseInt(playerMove.attr('data-block'))){
        $('#moveCounter').text(++moveNumber);
        $(this).append(playerMove);
        playerMove = null;
      }
    } else if($(this).children().length === 0){
      $('#moveCounter').text(++moveNumber);
      playerMove.appendTo($(this));
      playerMove = null;
    }

    if($('[data-stack]').eq(2).children().length === discNumber){
      $('#announce-game-won').append('<h1>YOU WIN!</h1>');
      $('#menuButton').css('display', 'inline');
    }

  });

  $('#menuButton').click(function(){
    location.reload();
  })


/*
  console.log(parseInt($(this).attr('[data-block][0]')));

  // if(parseInt($rings) < 100){
  //   $('[data-block]').draggable({
  //       revert: 'invalid'
  //   });
  // }

  $('[data-block]').draggable({
    revert: 'invalid'
  })

  $('[data-stack]').each(function(){
    $(this).droppable({
      drop: function(event, ui){

        let drag = $(ui.draggable).attr('data-block');
        let last = $($(this).children().last()).attr('data-block');

        console.log(drag + " " + last);

        if(parseInt(drag) > parseInt(last)){
          $(ui.draggable).draggable('option', 'revert', true);
        } else {
          $(ui.draggable).appendTo(this).attr('style', 'position: relative');
        }
      }
    });
  });
  */
});
