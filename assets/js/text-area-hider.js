$(document).ready(function () {
  console.log("this is a ping")
  $('.content-item').hide();

  $('.btn').click(function () {
    var uniqueID = $(this).data('unique-id');
    var target = '#' + $(this).attr('id') + '-content-' + uniqueID;
    $('.content-item').not(target).hide();
    console.log(target)
    $(target).toggle();
  });
});