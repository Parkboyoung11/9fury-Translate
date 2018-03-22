/* 
* Author    : 9fury
* Facebook  : fb.com/sonvuhong9fury
*/

function showMeaning(input, word,from, la) {
     $.ajax({
        type: 'GET',
        url: 'http://mazii.net/api/gsearch/' + word +'/' +from + '/' + la,
        success: function(data) {
             var meaning = JSON.parse(data.data);
            $("#" + input).val(meaning.sentences[0].trans);
        }
    });
}

$( "#japanese" ).keyup(function() {
    var japanese = $("#japanese").val();
    showMeaning("vietnamese", japanese,"ja", "vi");
    showMeaning("english", japanese,"ja",  "en");   

});

$( "#vietnamese" ).keyup(function() {
    var vietnamese = $("#vietnamese").val();
    showMeaning("japanese", vietnamese,"vi", "ja");
    showMeaning("english", vietnamese,"vi",  "en");   

});

$( "#english" ).keyup(function() {
    var english = $("#english").val();
    showMeaning("vietnamese", english,"en", "vi");
    showMeaning("japanese", english,"en",  "ja");   

});
