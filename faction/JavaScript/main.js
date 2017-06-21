// 设置菜单按钮的点击事件
var menuClick = function(){
    var menuBut = $("#menuBut");
    var nav_sm = $(".nav-sm").eq(0);
    var nav_sm_cross = $(".nav-sm-cross").eq(0);
    menuBut.on("click", function(){
        // 显示菜单栏
        nav_sm.css("display", "inline-block");
    });
    nav_sm_cross.on("click", function(){
        nav_sm.css("display", "none");
    });
}();

// 设置轮播图的点击事件和自动播放
var slices = function(){
    var slices = $(".slice");
    var btns = $(".slices-btn"); // 每张图片对应的按钮
    var current_selected = 0; // 当前选中的是第几张图片

    // 为每个按钮设置点击事件
    for(let i=0; i<btns.length; i++){
        btns[i].onclick = function(){
            // 选中的按钮不是已选中的才需要焕图片
            if(this.value !== current_selected){
                // 修改按钮的背景颜色
                this.style.backgroundColor = btns.eq(current_selected).css("background-color");
                btns[current_selected].style.backgroundColor = "transparent";

                // 修改图片的可见性
                slices.eq(current_selected).css("display", "none");
                slices.eq(this.value).css("display", "inline-block");

                current_selected = this.value;
            }
        };
    }

    // 图片自动播放
    setInterval(function(){
        var next_selected = (current_selected + 1) % btns.length;

        btns[next_selected].style.backgroundColor = btns.eq(current_selected).css("background-color");
        btns[current_selected].style.backgroundColor = "transparent";
        slices.eq(current_selected).css("display", "none");
        slices.eq(next_selected).css("display", "inline-block");

        current_selected = next_selected;
    }, 3500);
}();