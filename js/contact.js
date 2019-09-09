
function contact_us(){
    var data = $("form[name=algoForm]").serialize();
    if(document.getElementById("message_area").value.trim() == ""){

        $(document).ready(function(){
            document.getElementById("denialtext").innerHTML = "❌ No message included!"
            $("#denial").slideDown();
          });
        
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

function closebutton(name){
    $(document).ready(function(){
        $(name).slideUp();
      });

  }