
/*请在该区域内声明或者获取所要使用的全局变量*/
/********************************************begin************************************/
var buttonList = document.getElementsByClassName("buttons").item(0).children;
var arrowList = document.getElementsByClassName("arrow");
var imageList = document.querySelectorAll("img");
var imageIndex = 1;
var loop;
function switchImage(index){
    imageIndex = index;
    for (let i =1;i<imageList.length-1;i++){
        if (i==index) imageList.item(i).style.display = "block";
        else imageList.item(i).style.display = "none";
    }
    document.getElementsByClassName("on").item(0).classList.remove("on");
    buttonList.item(index-1).classList.add("on");
    if (imageIndex<5) {
        loop = setTimeout(switchImage, 2000, imageIndex + 1);
    }
    else {
        loop = setTimeout(switchImage,2000,1);
    }
};

/*Global Variable Area */
/*********************************************end*************************************/



/* 任务一
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击左箭头prev和右箭头next的时候，可以切换到前一张图片和下一张图片。（左右箭头为html中的a标签）
 * ②每切换一张图片，右下角的数字标记对应变化。
 *      如：一开始，第1张图片显示出来，右下角的1-5的数值中，数值1位红色，2-4为绿色，表示当前显示第1张图片。
 *      点击next箭头，图片切换到第2张，同时，右下角红色数值从1切换为2，数值1,3,4,5为绿色。
 * ③当当前图片为第1张时，点击prev箭头，切换到第5张图片，且数值5置为红色。
 * 当当前图片为第5张时，点击next箭头，切换到第1张图片，且数值1置为红色。
 * ④切换图片的过程不要求，可直接切换，也可动画切换，但要求保证一定的切换动画合理性，不能出去明显的衔接不当。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

arrowList.item(0).onclick = function () {
    if (imageIndex==1) imageIndex = 5;
    else imageIndex--;
    window.clearTimeout(loop);
    switchImage(imageIndex);
}
arrowList.item(1).onclick = function () {
    if (imageIndex==5) imageIndex = 1;
    else imageIndex++;
    window.clearTimeout(loop);
    switchImage(imageIndex);
}

/*********************************************end*************************************/



/* 任务二
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①轮播可以自动播放，切换图片间隔为2s，每一次切换的效果与点击next箭头的效果一致。
 * ②当鼠标移入轮播区域内时，停止自动播放。
 * ③当鼠标不在轮播区域内时，开始自动播放。
 * ④页面刚加载完成时，如果鼠标不在轮播区域内，自动开始自动播放；否则，等待直到鼠标移出轮播区域，再进行自动播放。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/
switchImage(imageIndex);
for (let i =1;i<imageList.length-1;i++){
    imageList.item(i).onmouseover = function (){clearTimeout(loop)};
    imageList.item(i).onmouseout = function (){switchImage(imageIndex)};
}
/*********************************************end*************************************/



/* 任务三
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击右下角的任意一个数值，能够切换到对应图片，且相应数值变为红色。
 * ②进行①操作过后，是否自动播放，其规则与上一个任务一致。
 * ③本部分只能使用原生JS。
 */
/********************************************begin************************************/
for (let i=0;i<buttonList.length;i++){
    buttonList.item(i).onclick = function () {
        window.clearTimeout(loop);
        switchImage(i+1);
    }
}

/*********************************************end*************************************/


/*任务四
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击某一非表头的单元格，可以编辑其内容，编辑完毕后点击其他部位，可以在界面上显示修改后的内容。
 * ②点击单元格后，光标自动定位于单元格的首个字符或者汉字前。
 * ③本部分可以使用jQuery，也可以使用原生JS。
 */
/********************************************begin************************************/
$(document).ready(function(){
    let outer = document.getElementById("bd");
    outer.style.backgroundColor = "#D9D4E2";
    outer.style.width = "fit-content";
    outer.style.margin = "auto";
    outer.style.paddingTop = "10px";
    outer.style.paddingBottom = "10px";
    outer.style.paddingLeft = "70px";
    outer.style.paddingRight = "70px";
    let table = document.querySelector("table");
    table.style.margin = "auto";
    table.style.borderRadius = "5px";
    table.style.marginTop = "30px";
    table.style.width = "600px";
    $("td").width("200px").height("auto");
    $("td").click(function(event){
        if($(this).children("input").length > 0)
            return false;
        let temp = $(this);
        let preText = temp.html();
        //得到当前文本内容
        let input = $("<input type='text' value='"+preText+"'/>");
        //创建一个文本框元素
        temp.html(""); //清空td中的所有元素
        input
            .width("195px")
            .height("auto")
            .css({border:"0px",fontSize:"17px"})
            .appendTo(temp);
        //把创建的文本框插入到tdObj子节点的最后
        $("input").selectionEnd = 0;
        $("input").focus();
        input.keyup(function(event){
                if(13 == event.which)
                {
                    let text = input.val();
                    temp.html(text);
                }
            });
        $("input").blur(function () {
            let text = input.val();
            temp.html(text);
        })
        //已进入编辑状态后，不再处理click事件
        input.click(function(){
            return false;
        });
    });
});
/*********************************************end*************************************/