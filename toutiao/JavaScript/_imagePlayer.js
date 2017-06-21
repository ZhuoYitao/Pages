// 跟Image player这个组件相关的JS代码

var ImagePlayer = function (){
    var current_selected = 0;
    var sidebar = $(".imagePlayer-sidebar")[0];
    var sidebar_items = $(".imagePlayer-sidebar-item");
    var images = $(".imagePlayer-image");

    for(let i=0; i<sidebar_items.length; i++){
        sidebar_items[i].onmouseover = function(){
            if(this.value !== current_selected){
                // 修改背景颜色
                this.style.backgroundColor = sidebar_items.eq(current_selected).css("background-color");
                sidebar_items[current_selected].style.backgroundColor = "transparent";

                // 图片的可见性
                images.eq(current_selected).css("display", "none");
                images.eq(this.value).css("display", "inline-block");

                current_selected = this.value;
            }
        }
    }

    setInterval(function(){
        var next_selected = (current_selected + 1) % images.length;

        sidebar_items[next_selected].style.backgroundColor = sidebar_items.eq(current_selected).css("background-color");
        sidebar_items[current_selected].style.backgroundColor = "transparent";
        images.eq(current_selected).css("display", "none");
        images.eq(next_selected).css("display", "inline-block");

        current_selected = next_selected;
    }, 3500);

    // TODO: hover时暂停自动换图
}();