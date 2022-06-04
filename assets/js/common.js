

  $(".mobile_menu a, .mobile_top_bar a ").click(function(){
    var mobile_menu_content_name = $(this).attr("data-action");
    // If go to home then scroll is available -----------
    if(mobile_menu_content_name == "home"){
      $("body").removeClass("body_scroll_lock");
    }else{
      $("body").addClass("body_scroll_lock");
    }
     // If go to home then scroll is available -----------

    $(".mobile_menu_content").removeClass("mobile_content_switch");

    
    
    $("."+mobile_menu_content_name).toggleClass("mobile_content_switch");

    //Activing color 
    $(".mobile_menu a, .mobile_top_bar a ").removeClass("mob_menu_item_active");
    $(this).addClass("mob_menu_item_active");
  });


