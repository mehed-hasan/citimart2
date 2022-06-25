

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


// Desktop sliding option 
$("#categoryMenuToggle").on("click", function () {
  $(".all_department_menu").slideToggle(500);
});








// Js for modal started 

$(window).on('load', function() {
  $(".location_modal").modal('show');

  $(".sign_in_btn").click(function(){
    $(".modal").modal('hide');
    $(".sign_in_modal").modal('show');
  });

  $(".sign_up_btn").click(function(){
    $(".modal").modal('hide');
    $(".sign_up_modal_1").modal('show');
  });


  $(".modal_back").click(function(){
    var prev = $(this).attr("data-prev");
          $(this).parent().parent().parent().parent().parent().modal('hide');
          $("."+prev).modal('show');
  })
});

  // Example starter JavaScript for disabling form submissions if there are invalid fields

  (function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {

          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation();
          }

          else{
            // If validated 

          // Remove those line when it comes from back end 
          event.preventDefault()
          event.stopPropagation();
          var next = $(this).find("button:last-child").attr("data-next");
          $(this).parent().parent().parent().modal('hide');
          $("."+next).modal('show');
           
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()


  // Modal js ended 



  // Script for counter buttons
  $(".static_btn").click(function(){
    $(this).css({"display":"none"});
    $(this).parent().parent().parent().find(".counter_btn").css({"display":"flex","justify-content":"space-between"});
    $(this).parent().parent().parent().find("input").val(1);

});

// counter btn on 
$(".add_btn").click(function(){
    $current_val = parseInt($(this).parent().parent().parent().find("input").val());
   
    $update_val = $current_val + 1;
    $(this).parent().parent().parent().find("input").val($update_val);
});

$(".remove_btn").click(function(){
    $current_val = parseInt($(this).parent().parent().parent().find("input").val());
   
    $update_val = $current_val - 1;
    $(this).parent().parent().parent().find("input").val($update_val);

    if($update_val < 1){
        $(this).parent().parent().parent().find(".counter_btn").css({"display":"none"});
        $(this).parent().parent().parent().find(".static_btn").css({"display":"block"});
    }
});


$(".side_btn").click(function(){
  $(this).toggleClass("active_side_btn");
});

$(".mobile_favourite").click(function(){
  $(".mobile_account .nav-link").removeClass("active");
  $("#v-pills-messages-tab").addClass("active");

  $(".mobile_account .tab-pane").attr("class", "tab-pane fade");
  $("#v-pills-favorites").addClass( "fade active show");

});
// script for counter button ended 
