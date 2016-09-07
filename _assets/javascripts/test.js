function on() {
  $('.test-menu').click(function() {
    $('.sub-menu').css('display', 'block')
    $('.test-menu').off()
    offs();
  })
}
function offs() {
  $('.test-menu').click(function () {
    $('.sub-menu').css('display', 'none')
    $('.test-menu').off()
    on();
  })
}

$(function(){

  console.log('loadded');
  on();


})
