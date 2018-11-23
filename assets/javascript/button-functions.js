$(document).ready(function(){
    $(document).on("click", ".level-item", function(){
        event.preventDefault();
        var newDiv = $("<div>");
        var selectRecipe = $(this).closest(".newRecipe");        
        newDiv.append(selectRecipe);
        $("#fav-recipes").append(newDiv);
       
    });
   
    $(document).on("click", ".delete", function(){
        event.preventDefault();
       $(this).closest(".newRecipe").remove();
        $(this).parent().remove();
    });
})