// 最新
window.onload=function(){
    setTimeout(getData,300)
}
    //1、设置存放数据的数组
var dataList=[];
    //2、ajax请求 请求后将数据放入数组dataList
function getData(){
    var ajax=new XMLHttpRequest()||new ActiveXObject('Microsoft.XMLHTTP');
    ajax.open('get','http://127.0.0.1:3000/useing/public');
    ajax.send();
    ajax.onreadystatechange=function(){
        if(ajax.readyState==4){
            if(ajax.status==200){
                data=ajax.responseText;
                dataList=JSON.parse(data);
                show();
            }else{
                console.log('加载错误');
            }  
        }
    }
}
    // 渲染数据
var index=-1;
var artbox=document.getElementsByClassName('art_box')[0];
    // 开关
var flg=true;
    //加载a
var load=document.getElementsByClassName('load')[0];
    // 3、调用展示数据的方法
function show(){
    if(flg){
        index++;
        var ul=document.createElement('ul');
        ul.setAttribute('class','slide_list');

        for(var item of dataList){
            // li a
            var li=document.createElement('li');
            var a=document.createElement('a');
            a.setAttribute('class','slide_list_a');
            li.appendChild(a);
            ul.appendChild(li);
            // img span1(slide_box_sp) div1(slide_box_item)
            var img=document.createElement('img');
            img.src=item.img;
            img.setAttribute('class','slide_box_img');
            var span1=document.createElement('span');
            span1.innerHTML='首发';
            span1.setAttribute('class','slide_box_sp');
            var div1=document.createElement('div');
            div1.setAttribute('class','slide_box_item');
            a.appendChild(img);
            a.appendChild(span1);
            a.appendChild(div1);
            // p(item1 item2 item3 item4) 
            var p1=document.createElement('p');
            p1.setAttribute('class','item1');
            p1.innerHTML=item.text;
            var p2=document.createElement('p');
            p2.setAttribute('class','item2');
            var p3=document.createElement('p');
            p3.setAttribute('class','item3');
            p3.innerHTML='申请';
            var p4=document.createElement('p');
            p4.setAttribute('class','item4');
            p4.innerHTML='剩余时间两天';
            div1.appendChild(p1);
            div1.appendChild(p2);
            div1.appendChild(p3);
            div1.appendChild(p4);
            // p2内部span 
            var span2=document.createElement('span');
            span2.setAttribute('class','item2_sp1');
            var span3=document.createElement('span');
            span3.setAttribute('class','item2_sp2');
            span2.innerHTML=item.totalnum;
            span3.innerHTML=item.num+'台';
            p2.appendChild(span2);
            p2.appendChild(span3);
            // p3内部span
            var span4=document.createElement('span');
            span4.setAttribute('class','item3_sp');
            span4.innerHTML=item.apply;
            p3.appendChild(span4);
        }
        ul.style.height='915px';
        ul.style.overflow='hidden';
        artbox.appendChild(ul);
        if(artbox.children.length>=2){
            clearTimeout(getData,300);
            load.innerHTML='~~数据加载完毕'; 
            load.style.background='none';
            load.style.color='grey';
            return flg=false;  
        }
    }
}
// 4、点击加载
load.onclick=function(){
    load.className='load_con';
    setTimeout(show,700)  
    load.onmouseleave=setTimeout(function(){
        load.className='load';
    },700)
}