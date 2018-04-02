/* 
* Author    : 9fury 
* Facebook  : fb.com/sonvuhong9fury
*/

function showMeaning(input, word,from, la, romajiFlag) {
     $.ajax({
        type: 'GET',
        url: 'http://mazii.net/api/gsearch/' + word +'/' +from + '/' + la,
        success: function(data) {
            var meaning = JSON.parse(data.data);
            $("#" + input).val(meaning.sentences[0].trans);
            if (romajiFlag == 1) {
                $("#romaji").val(meaning.sentences[1].src_translit);
            }
            if (romajiFlag == 2) {
                $("#romaji").val(meaning.sentences[1].translit);
            }
        }
    });
}

$( "#japanese" ).keyup(function() {
    var japanese = $("#japanese").val();
    showMeaning("vietnamese", japanese,"ja", "vi", 0);
    showMeaning("english", japanese,"ja",  "en", 1);
});

$( "#vietnamese" ).keyup(function() {
    var vietnamese = $("#vietnamese").val();
    showMeaning("japanese", vietnamese,"vi", "ja", 2);
    showMeaning("english", vietnamese,"vi",  "en", 0);   
});

$( "#english" ).keyup(function() {
    var english = $("#english").val();
    showMeaning("vietnamese", english,"en", "vi", 0);
    showMeaning("japanese", english,"en",  "ja", 2);
});