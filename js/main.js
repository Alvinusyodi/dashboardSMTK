// Toggle active class for menu items
$(".menu > ul > li").click(function(e){
    // Remove class 'active' from siblings
    $(this).siblings().removeClass("active");
    // Add 'active' class to clicked item
    $(this).toggleClass("active");
    // Toggle the submenu visibility
    $(this).find("ul").slideToggle();
    // Close other submenus
    $(this).siblings().find("ul").slideUp();
    // Remove 'active' class from submenu items
    $(this).siblings().find("ul").find("li").removeClass("active");
});

// Toggle sidebar visibility
$(".menu-btn").click(function(e){
    $(".sidebar").toggleClass("active");
    // Toggle 'narrow' class to sidebar and adjust main content
    $("main").toggleClass("sidebar-narrow");
});
