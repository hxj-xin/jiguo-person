// 最新
window.onload=function(){
    setTimeout(getData,300)
}
    //1、设置存放数据的数组
var dataList=[];
    //2、ajax请求 请求后将数据放入数组dataList
function getData(){
    var ajax=new XMLHttpRequest()||new ActiveXObject('Microsoft.XMLHTTP');
    ajax.open('get','http://127.0.0.1:3000/report/new');
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
var ul=document.getElementsByClassName('main_list')[1];
    // 开关
var flg=true;
    //加载a
var load=document.getElementsByClassName('load')[0];
    // 3、调用展示数据的方法
function show(){
    if(flg){
        index ++;
        if(index>=dataList.length){
            clearTimeout(getData,300);
            clearTimeout(show,300);
            load.innerHTML='~~数据加载完毕'; 
            load.style.background='none';
            load.style.color='grey';
            return flg=false;  
        }
        // 遍历dataList内的li（无数组）
        for(var i of dataList){
            // li a
            var li=document.createElement('li');
            li.setAttribute('class','report_item');  
            var a=document.createElement('a');
            a.setAttribute('class','report_item_a');
            li.appendChild(a);
            //img()  div1(report_item_box) p1(report_item_p) div3(shoppers_item3)
            var img=document.createElement('img');
            img.setAttribute('class','report_item_img');
            img.src=dataList[index].img;
            var div1=document.createElement('div');
            div1.setAttribute('class','report_item_box');
            var p1=document.createElement('p');
            p1.setAttribute('class','report_item_p');
            p1.innerHTML='关于'+dataList[index].text+'还有4篇报告，点击查看';
            a.appendChild(img);
            a.appendChild(div1);
            a.appendChild(p1);
            // p(report_item_boxp) div(report_item_boxa)
            var p2=document.createElement('p');
            p2.setAttribute('class','report_item_boxp');
            p2.innerHTML=dataList[index].text;
            var div11=document.createElement('div');
            div11.setAttribute('class','report_item_boxa');
            div1.appendChild(p2);
            div1.appendChild(div11);
            // div2(report_item_boxa1) div3(report_item_boxa2)
            var div2=document.createElement('div');
            div2.setAttribute('class','report_item_boxa1');
            var div3=document.createElement('div');
            div3.setAttribute('class','report_item_boxa2');
            div11.appendChild(div2);
            div11.appendChild(div3);
            // div2内的span
            var span1=document.createElement('span');
            span1.setAttribute('class','item_boxa1_sp1');
            var span2=document.createElement('span');
            span2.setAttribute('class','item_boxa1_sp2');
            span2.innerHTML=dataList[index].uName;
            var span3=document.createElement('span');
            span3.setAttribute('class','item_boxa1_sp3');
            span3.innerHTML=dataList[index].endTime;
            div2.appendChild(span1);
            div2.appendChild(span2);
            div2.appendChild(span3);
            // div3内的span
            var span4=document.createElement('span');
            span4.setAttribute('class','item_boxa2_sp1');
            span4.innerHTML='3';
            var span5=document.createElement('span');
            span5.setAttribute('class','item_boxa2_sp2');
            span5.innerHTML='3';
            div3.appendChild(span4);
            div3.appendChild(span5);

        }
        ul.appendChild(li);
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
