// 最新
window.onload=function(){
    setTimeout(getData,300)
}
    //1、设置存放数据的数组
var dataList=[];
    //2、ajax请求 请求后将数据放入数组dataList
function getData(){
    var ajax=new XMLHttpRequest()||new ActiveXObject('Microsoft.XMLHTTP');
    ajax.open('get','http://127.0.0.1:3000/guid/hot');
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
var mainbox=document.getElementsByClassName('art_box')[0];
    // 开关
var flg=true;
    //加载a
var load=document.getElementsByClassName('load')[0];
    // 3、调用展示数据的方法
function show(){
    if(flg){
        index +=6;
        // if(index>=dataList.length){
        //     clearTimeout(getData,300);
        //     return flg=false;
        //     // load.innerHTML='数据加载完毕'; 
        // }
        var ul_=document.createElement('ul');
        ul_.setAttribute('class','main_list');
        if(index>=dataList.length){
            clearTimeout(getData,300);
            clearTimeout(show,300);
            load.innerHTML='~~数据加载完毕'; 
            load.style.background='none';
            load.style.color='grey';
            return flg=false;  
        }
        for(var item of dataList){
            // li a
            var li=document.createElement('li');
            li.setAttribute('class','shoppers_box_item');
            var a=document.createElement('a');
            li.appendChild(a);
            ul_.appendChild(li);
            // div1(shoppers_item1) div2(shoppers_item2) div3(shoppers_item3)
            var div1=document.createElement('div');
            div1.setAttribute('class','shoppers_item1');
            var div2=document.createElement('div');
            div2.setAttribute('class','shoppers_item2');
            var div3=document.createElement('div');
            div3.setAttribute('class','shoppers_item3');
            a.appendChild(div1);
            a.appendChild(div2);
            a.appendChild(div3);
            // img p(shoppers_item1_p1) p(shoppers_item1_p2)
            var img=document.createElement('img');
            img.src=item.img;
            img.setAttribute('class','img1');
            var p1=document.createElement('p');
            p1.setAttribute('class','shoppers_item1_p1');
            p1.innerHTML=item.text;
            var p2=document.createElement('p');
            p2.setAttribute('class','shoppers_item1_p2');
            div1.appendChild(img);
            div1.appendChild(p1);
            div1.appendChild(p2);
            // span1(shoppers_item1_sp1) span2(shoppers_item1_sp1)
            var span1=document.createElement('span');
            span1.setAttribute('class','shoppers_item1_sp1');
            span1.innerHTML=item.like;
            var span2=document.createElement('span');
            span2.setAttribute('class','shoppers_item1_sp2');
            span2.innerHTML=item.words;
            p2.appendChild(span1);
            p2.appendChild(span2);
        }
        mainbox.appendChild(ul_); 
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
