function contact_us(){
    var data = $("form[name=algoForm]").serialize();
    alert(data)
    if(document.getElementById("message_area").value.trim() == ""){
        alert("Nothing entered!")
    }
    else{
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbyb2E3kgUvkuK7d4OGIsQ8KkrD4ZUTsW3i0ytYjsg/exec",
            type: "POST",
            data: data,
        })
    alert("Thank you for contacting me!")
    location.reload();
            
        }
}