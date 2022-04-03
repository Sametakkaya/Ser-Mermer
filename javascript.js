$('.proWrap').on({
    mouseenter: function() {
      $(this).children(".proDetail").stop().show(300);
      $(this).addClass("classShadow");
    },
    mouseleave: function() {
      $(this).children(".proDetail").stop().hide(200);
      $(this).removeClass("classShadow");
    }
  });