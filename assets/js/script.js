
/*loader*/
$(document).ready(function() {
 
  // Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
    }, );
 
});


$("#nightmode").change(function() {
    if ($(this).is(":checked")){
        $('body').css("background-color", "#ececcc");
    $('.text-color').css("color",  "#1E1C31",);
    }

    else{
        $('body').css("background-color", "#1E1C31");
        $('.text-color').css("color", "#FFFFE0", );
    }
});
