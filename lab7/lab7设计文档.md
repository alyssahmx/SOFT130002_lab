# lab7设计文档

#### 问题及解决方法

1、author和lifetime如何对齐

由于设置一个是h3一个是h5中间会跳行，所以最后用让author部分float到左边，然后给lifetime设置position使其在一行上。

2、图片的添加

遍历works中的photos，将其添加为img的src，再将图片添加到对应div中。

