var endpoint = "https://www.jsonstore.io/21c4b19f48642dde93121439143a989408f1e823302586cef03370a7a30e0fe6";

function copyToClipboard() {
    var text = document.getElementById("linkoutput").value;
    if(text == ""){
        $(document).ready(function(){
            document.getElementById("denialtext").innerHTML = "❌ No links generated!"
            $("#denial").slideDown();
          });
    }
    else{
    var copyText = document.getElementById("linkoutput");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    $(document).ready(function(){
          $("#denial").slideUp();
          document.getElementById("confirmationtext").innerHTML = "✔ Copied to Clipboard!"
          $("#confirmation").slideDown();
        });
    }
}

function closebutton(name){
    $(document).ready(function(){
        $(name).slideUp();
    });

}

function geturl(){
    var lines = $('textarea').val().split('\n');
	return lines;
}

function getrandom() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 15; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function genhash(){
    if (window.location.hash == ""){
        window.location.hash = getrandom();
    }
}

function send_request(lines) {

    for(var i = 0;i < lines.length;i++){
        my_url = lines[i];
        this.my_url = my_url;
        $.ajax({
            'url': endpoint + "/" + window.location.hash.substr(i+5) + "/" + (i+1),
            'type': 'POST',
            'data': JSON.stringify(this.my_url),
            'dataType': 'json',
            'contentType': 'application/json; charset=utf-8'
    })
    }
}

function shorturl(){
    if (window.location.hash == "") {
        var urls = geturl();
        if (urls == "") {
            $(document).ready(function(){
                document.getElementById("denialtext").innerHTML = "❌ No links entered!"
                $("#denial").slideDown();
              });
        }
        else if(document.getElementById("folderinput").value.trim() == ""){
            $(document).ready(function(){
                document.getElementById("denialtext").innerHTML = "❌ No folder name entered!"
                $("#denial").slideDown();
              });
        }
        else if (urls.length > 10) {
            $(document).ready(function(){
                document.getElementById("denialtext").innerHTML = "❌ A maximum of 10 links are allowed!"
                $("#denial").slideDown();
              });
            
        }
        else if (window.location.hash != ""){
            $(document).ready(function(){
                document.getElementById("denialtext").innerHTML = "❌ A link has already been generated!"
                $("#denial").slideDown();
              });

        }

         else {
            var oldurl = window.location.href
            genhash();
            var folder_name = document.getElementById("folderinput").value;
            var encoded_folder = window.btoa(folder_name);
            window.location.hash = "/" + urls.length + "/" + window.location.hash + "@" + encoded_folder;
            document.getElementById("linkoutput").value = window.location.href
            //window.history.pushState("", "", oldurl);
            send_request(urls);
            $(document).ready(function(){
                $("#denial").slideUp();
                document.getElementById("confirmationtext").innerHTML = "✔ Link Generated!"
                $("#confirmation").slideDown();
              });
        }
    }
    else if(window.data_link != ""){
        window.location.href = window.data_link;
    }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


if (window.location.hash != "") {
    number = window.location.hash.substring(2,4);
    number = number.replace(/\D/g,'');
    random_number = Math.round(Math.random() * (number-1)) + 1;
    var hashh = window.location.hash.substr(random_number+4);
    var encode_location = window.location.href.indexOf("@");
    var decoded_folder = window.atob(window.location.href.substring(encode_location+1));
    document.getElementById("header_rlr").innerHTML = decoded_folder;
    document.getElementById("button_click").innerHTML = "Take me there!";
    document.getElementById("folderinput").outerHTML = "You are being redirected to:";
    document.getElementById("linkoutput").outerHTML = "";
    document.getElementById("copy_click").outerHTML = "";
    document.getElementById("folderlinks").outerHTML = "?";

    $.getJSON(endpoint + "/" + hashh + "/" + random_number, function (data) {
        window.data_link = data["result"];
        var lc = window.data_link.indexOf("/", 8)+1;
        var temp_display = window.data_link.substring(0, lc);
        var display_link = temp_display.concat("...");
        document.getElementById("folderlinks").outerHTML = display_link;

    });
}


