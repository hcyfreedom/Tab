# Tab
JavaScript实现选项卡。
选项卡最基本的表现就是，点击bar，显示当前对应的内容，所以有个显示和隐藏的关系在里面。
<br>
这个怎么处理呢？“显示当前，隐藏所有的其他” == “隐藏所有，显示当前”
<br>
所以我们可以，先将所有的都隐藏了，再把当前这个处理一下。
<br>
遍历所有的button，为每一个button加上属性index，即button[i].index，给每一个button绑定上点击事件，<br>
并且在点击的时候，再次遍历，将所有的button的样式清空，即class置空，并且遍历所有的divDetail，隐藏所有divDetail。<br>
 然后，在这层遍历的外面，指定this.className为active（预设好的），并且将this.index对应的divDetail显示出来。<br>
 思路就是，所有都隐藏，再显示当前。