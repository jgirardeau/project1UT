$(document).ready(function(){
        var recipeID = $(".media box");
    $(document).on("click", ".level-item", function(){
        console.log(favrecipe);
        $("#fav-recipes").text(favrecipe);
       //will need to change "text" to prepend
    });
    function removeRecipe(){
        var recipeToRemove = $("#recipe-5");
        recipeToRemove.remove();
        // $(this).closest(".article").remove();
    }
   
    $(document).on("click", ".delete", function(){
        event.preventDefault();
        console.log("clicked");
        removeRecipe();
        // $(this).closest(".article").remove();
        $(this).parent().remove();
    });
})