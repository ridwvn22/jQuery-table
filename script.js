$( document ).ready(function(){
    $("th").css("font-size", "20px");
    $("th").css("font-style", "italic" );
    
    $("td:nth-child(even)").css ({
        "background-color": "tomato"
    });    
    $("td:nth-child(odd)").css ({
         "background-color": "lightblue"
    });
    
    });