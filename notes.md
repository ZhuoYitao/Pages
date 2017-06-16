记录做这个项目时的心得体会。

1. border：大小， 颜色， 类型。缺一不可。
2. 通过给文字加透明的背景色来防止文字被背景图挡到：
background-image: -webkit-linear-gradient(top,transparent 0,rgba(0,0,0,.8) 100%);
background-image: linear-gradient(-180deg,transparent 0,rgba(0,0,0,.8) 100%);
3. 如果文字过长且不想换行，可以使用省略号代替不能显示出来的文字：
text-overflow: ellipsis;
4. jQuery取某类元素的第0个的background-color属性值：
var sidebar_items = $(".imagePlayer-sidebar-item");
console.log(sidebar_items.eq(0).css("background-color"));