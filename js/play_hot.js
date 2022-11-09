// 最新
window.onload=function(){
    setTimeout(getData,300)
}
    //1、设置存放数据的数组
var dataList=[];
    //2、ajax请求 请求后将数据放入数组dataList
function getData(){
    var ajax=new XMLHttpRequest()||new ActiveXObject('Microsoft.XMLHTTP');
    ajax.open('get','http://127.0.0.1:3000/play/hot');
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
var bottom=document.getElementsByClassName('bottom')[0];
    // 开关
var flg=true;
    //加载a
var load=document.getElementsByClassName('load')[0];
    // 3、调用展示数据的方法
function show(){
    if(flg){
        index++;
        // if(index>=dataList.length){
        //     clearTimeout(getData,300);
        //     return flg=false;
        //     // load.innerHTML='数据加载完毕'; 
        // }
        var ul=document.createElement('ul');
        ul.setAttribute('class','main_list');
        var ull=document.getElementsByClassName('main_list');
        if(ull.length>=dataList.length){
            clearTimeout(getData,300);
            load.innerHTML='~~数据加载完毕'; 
            load.style.background='none';
            load.style.color='grey';
            return flg=false;  
        }
        for(var item of dataList[index]){
            // li a
            var li=document.createElement('li');
            var a=document.createElement('a');
            a.setAttribute('class','main_list_a');
            li.appendChild(a);
            ul.appendChild(li);
            // img div1(main_list_box)
            var img=document.createElement('img');
            img.src=item.img;
            var div1=document.createElement('div');
            div1.setAttribute('class','main_list_box');
            a.appendChild(img);
            a.appendChild(div1);
            // p(main_list_bp) span1(main_list_bsp) div(main_list_item)
            var p=document.createElement('p');
            var span1=document.createElement('span');
            var div2=document.createElement('div');
            p.setAttribute('class','main_list_bp');
            span1.setAttribute('class','main_list_bsp');
            div2.setAttribute('class','main_list_item');
            p.innerHTML=item.text;
            span1.innerHTML=item.description;
            div1.appendChild(p);
            div1.appendChild(span1);
            div1.appendChild(div2);
            // span2(main_list_itemleft) div3(main_list_itemright)
            var span2=document.createElement('span');
            span2.setAttribute('class','main_list_itemleft');
            var div3=document.createElement('div');
            div3.setAttribute('class','main_list_itemright');
            span2.innerHTML=item.price;
            div2.appendChild(span2);
            div2.appendChild(div3);
            // span(itemright_sp1 itemright_sp2)
            var span3=document.createElement('span');
            var span4=document.createElement('span');
            span3.setAttribute('class','itemright_sp1');
            span4.setAttribute('class','itemright_sp2');
            span3.innerHTML=item.like;
            span4.innerHTML=item.words;
            div3.appendChild(span3);
            div3.appendChild(span4);
        }
        bottom.appendChild(ul); 
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
// 
var li=document.getElementsByClassName('ul_')[0].children;
console.log(li);
var art=document.getElementsByTagName('article');
console.log(art);
for(var i=0;i<li.length;i++){
    li[i].setAttribute('index',i);
    li[i].onclick=function(){
        var index=this.getAttribute('index');
        for(var k=0;k<li.length;k++){
            li[k].className='';
            li[index].className='redb';
        }
        for(var j=0;j<art.length;j++){
            art[j].style.display='none';
            art[index].style.display='block';
        }
    }
}
var like2=document.getElementsByClassName('top_div_sp1');

