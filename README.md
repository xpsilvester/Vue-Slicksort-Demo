# Vue-Slicksort-Demo

vue 列表拖拽排序例子，与 [awe-dnd](https://www.npmjs.com/package/awe-dnd) 和 [vue-draggable](https://www.npmjs.com/package/vue-draggable) 作了比较，发现另外两个插件对父列表中的子列表拖拽排序的效果不是很好，从使用便捷和动画效果来看，还是 [vue-slicksort](https://www.npmjs.com/package/vue-slicksort?activeTab=readme) 最好用。下面就介绍一下 vue-slicksort 的使用，很容易上手。

A demo of vue-slicksort : A set of component mixins to turn any list into an animated, touch-friendly, sortable list.

Reference link : [vue-slicksort - npm](https://www.npmjs.com/package/vue-slicksort?activeTab=readme) 、 [source](https://github.com/Jexordexan/vue-slicksort)


### Preview

![拖拽排序预览][1]

### Usage

```
npm install
```
```
npm start
```
or Click

```
dist/index.html
```

### Key Code 
##### path: Script/src/index.vue
```HTML
<template>
    <div>
        <SlickList :lockToContainerEdges="true" class="list" lockAxis="y" v-model="list">
            <SlickItem class="list-item" v-for="(item, index) in list" :index="index" :key="index">
                {{ item.title }}
            </SlickItem>
        </SlickList>
    </div>
</template>
<script>
    import { SlickList, SlickItem } from 'vue-slicksort'
    export default {
        data () {
            return {
                list:[
                    {
                        title: 'list1'
                    },
                    {
                        title: 'list2'
                    },
                    {
                        title: 'list3'
                    },
                    {
                        title: 'list4'
                    },
                    {
                        title: 'list5'
                    }
                ]
            }
        },
        components: {
            SlickItem,
            SlickList
        },
        methods: {
            getChangeLists (vals) {
                console.log(vals, 'vals')
            }
        }
    }
</script>
```
### Props

Property | Type |  Default | Description 
-|-|-|-
value|Array|-|列表的内容
axis|String|y|列表元素可以被横向拖拽，纵向拖拽还是网格拖拽。用x,y,xy来表示。
lockAxis|String|-|用于排序时在坐标系中锁定元素的移动
helperClass|String|-|helper的自定义样式类
transitionDuration|Number|300|元素移动动画的持续时间
pressDelay|Number|0|如果需要当元素被按下一段时间再允许拖拽，可以设置这个属性
pressThreshold|Number|5|移动允许被忽略的阈值，单位是像素
distance|Number|0|如果需要在拖拽出一定距离之后才被识别为正在拖拽的元素，可以设置这个属性
useDragHandle|Boolean|false|如果使用HandleDirective，设置为true
useWindowAsScrollContainer|Boolean|false|是否设置window为可滚动的容器
hideSortableGhost|Boolean|false|是否设置window为可滚动的容器
useWindowAsScrollContainer|Boolean|true|是否自动隐藏ghost元素
lockToContainerEdges|Boolean|false|是否对正在拖拽的元素锁定容器边缘
lockOffset|String|50%|对正在拖拽的元素锁定容器边缘的偏移量
shouldCancelStart|Function|-|在拖拽开始前这个方法将被调用
getHelperDimensions|Function|-|可选方法({node,|index,|collection}),用于返回SortableHelper的计算尺寸

[1]: https://raw.githubusercontent.com/xpsilvester/Vue-Slicksort-Demo/master/slicksort.gif
