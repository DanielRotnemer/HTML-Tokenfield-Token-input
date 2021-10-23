$(window).on("load", function() 
{
    $(".token-input").focus();

    $(".token-input").on("keydown", function(event) 
    {
        if (event.key === "Enter" || event.keyCode === 13) 
        {
            event.stopPropagation();
            $(this).before(`<div class="token-wrapper">
                <div class="token">`
                    + $(this).text() +
                `</div>
                <svg height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
            </div>`);
            $(this).text("");

            // reallocate remove buttons
            for (i = 0; i < $(".token-wrapper").length; i++) {
                $($(".token-wrapper")[i]).find("svg").css("height", $($(".token-wrapper")[i]).height() + "px");
            }  
            
            $(".token-wrapper").find("svg").off("click");
            $(".token-wrapper").find("svg").on("click", function() {
                $(this).parent().remove();
            });

            return false;
        }            
    });

    $(".tokenfield").on("click", function() {
        $(".token-input").focus();
    });
});