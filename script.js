$( document ).ready(function(){
    $("tr th").css({"font-size": "20px", "font-style" :"italic"});
    $("tr td:nth-child(odd)").css("background-color", "lightblue" );
    
    checkCost();

    function checkCost(){
        for(var i = 1; i <= $("tr").length; i++){
            var item = $("tr:nth-child(" + i +") td:nth-child(2)");
            console.log("this is item", item);
            var cost = parseFloat(item.text());
            console.log("this is cost", cost);

            if(cost>10){
                item.css("background-color" , "tomato");
            }
        }
    }
});