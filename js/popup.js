/* 
* Author    : 9fury
* Facebook  : fb.com/sonvuhong9fury
*/

$( "#japanese" ).keyup(function() {
    var japanese = $("#japanese").val();
    var urlApi = "http://khanhnv.xyz/Son/translate.php?ja=" + japanese;
    $.get(urlApi, function(data) {
        var meaning = JSON.parse(data);
        $("#vietnamese").val(meaning.vietnamese);
        $("#english").val(meaning.english);
    });

    // $.get("http://khanhnv.xyz/Son/translate.php", {
    //     ja: japanese
    // }).done(function(data) {
    //     var obj = JSON.parse(data);
    //     $("#vietnamese").val(obj.vietnamese);
    //     $("#english").val(obj.english);
    // })


});
