//---------------------Menu---------------------//

$('#templatemo_menu > ul > li').hover(function() {
    // khi thẻ menu li bị hover thì drop down menu thuộc thẻ li đó sẽ trượt xuống(hiện)
    $('#sub-menu', this).slideDown(500);
  },function() {
    // khi thẻ menu li bị out không hover nữa thì drop down menu thuộc thẻ li đó sẽ trượt lên(ẩn)
    $('#sub-menu', this).slideUp();
  });

  $('#sub-menu > ul > li').hover(function() {
    // khi thẻ dropdown_menu li bị hover thì submenusubmenu thuộc thẻ li đó sẽ trượt xuống(hiện)
    $('#menu_child', this).slideDown(500);
  },function() {
    // khi thẻ dropdown_menu li bị hover thì submenusubmenu thuộc thẻ li đó sẽ trượt lên(ẩnẩn)
    $('#menu_child', this).slideUp();
  });

  $('#sub-menu > ul > li').hover(function() {
    // khi thẻ dropdown_menu li bị hover thì submenusubmenu thuộc thẻ li đó sẽ trượt xuống(hiện)
    $('#menu_child1', this).slideDown(500);
  },function() {
    // khi thẻ dropdown_menu li bị hover thì submenusubmenu thuộc thẻ li đó sẽ trượt lên(ẩnẩn)
    $('#menu_child1', this).slideUp();
  });

  $('#sub-menu > ul > li').hover(function() {
    // khi thẻ dropdown_menu li bị hover thì submenusubmenu thuộc thẻ li đó sẽ trượt xuống(hiện)
    $('#menu_child2', this).slideDown(500);
  },function() {
    // khi thẻ dropdown_menu li bị hover thì submenusubmenu thuộc thẻ li đó sẽ trượt lên(ẩnẩn)
    $('#menu_child2', this).slideUp();
  });

  
  $('#sub-menu > ul > li').hover(function() {
    // khi thẻ dropdown_menu li bị hover thì submenusubmenu thuộc thẻ li đó sẽ trượt xuống(hiện)
    $('#menu_child3', this).slideDown(500);
  },function() {
    // khi thẻ dropdown_menu li bị hover thì submenusubmenu thuộc thẻ li đó sẽ trượt lên(ẩnẩn)
    $('#menu_child3', this).slideUp();
  });

//---------------------Menu---------------------//





//---------------------SmallMenu of Content---------------------//
var imageList = {
    currentIndex: 0,
    items: [],
    intervalId: null,
    init: function() {
      this.items = document.querySelectorAll('.image-item');
      this.start();
    },
    start: function() {
      this.intervalId = setInterval(this.next.bind(this), 3500);
    },
    stop: function() {
      clearInterval(this.intervalId);
    },
    next: function() {
      this.items[this.currentIndex].classList.remove('active');
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
      this.items[this.currentIndex].classList.add('active');
    }
  };

  window.addEventListener('load', function() {
    imageList.init();
  });
//---------------------SmallMenu of Content---------------------//






