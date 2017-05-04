/**
 * Created by hcy on 2017/5/4.
 */
window.onload = function () {
    var button = document.getElementById('topBar').getElementsByTagName('button');
    console.log(button);
    var divDetail = document.getElementById('wrap').getElementsByTagName('div');
    console.log(divDetail)

    // 遍历所有的button，为每一个button加上属性index，即button[i].index，给每一个button绑定上点击事件，
    // 并且在点击的时候，再次遍历，将所有的button的样式清空，即class置空，并且遍历所有的divDetail，隐藏所有divDetail。
    // 然后，在这层遍历的外面，指定this.className为active（预设好的），并且将this.index对应的divDetail显示出来。
    // 思路就是，所有都隐藏，再显示当前。
    for(var i = 0;i<button.length;i++){
        button[i].index = i;
        divDetail[0].style.display = "block";
        button[0].className = "active"
        button[i].onclick = function () {
            for(var i  = 0;i<button.length;i++){
                button[i].className = '';
                divDetail[i].style.display = "none";
            }
            this.className = "active";
            divDetail[this.index].style.display = "block"
        }
    }

}