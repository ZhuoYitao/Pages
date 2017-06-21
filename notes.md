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
5. 修改placeholder的透明度：

::-webkit-input-placeholder { /* Chrome */
  opacity: 0.5;
}
:-ms-input-placeholder { /* IE 10+ */
  opacity: 0.5;
}
::-moz-placeholder { /* Firefox 19+ */
  opacity: 0.5;
}
:-moz-placeholder { /* Firefox 4 - 18 */
  opacity: 0.5;
}
6. 通过label标签的for属性来绑定一个label和一个input，从而实现点了label相当于点了input（尤其是checkbox和radio）的效果。
7. "selector":nth-child 一个节点的第n个子节点，且满足selector选择器。 "selector":nth-of-type 所有父节点下满足selector选择器对应的的第n个元素。
8. 使用z-index来使得relative元素不会挡到fixed元素。