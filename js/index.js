// nav部分
var reply_=document.getElementsByClassName('nav_a')[0];
var qul_=document.getElementsByClassName('qul')[0].firstChild.nodeValue;
var pro_=document.getElementsByClassName('pro')[0].firstChild.nodeValue;
reply_.onclick=function(){
    var pro=document.getElementsByClassName('pro')[0];
    var qul=document.getElementsByClassName('qul')[0];
    if(pro_>0){
        pro_--;
        pro.innerHTML=pro_;
        qul_++;
        qul.innerHTML=qul_;
    }else{
        pro.innerHTML=0;
        reply_.className='nav_a_a';
        reply_.innerHTML='试用产品剩余0'
    }
    
}
// 时间
var nav_p=document.getElementsByClassName('nav_p')[0];
function timego(){
    var nowTime=new Date();
    var goTime=new Date(2022,11,1);
    var dif=goTime-nowTime;
    function fn(a){
        return a>10?a:'0'+a;
    }
    var day=parseInt(dif/1000/60/60/24);
    var day1=fn(day);
    var h=parseInt(dif/1000/60/60%24);
    var h1=fn(h);
    var m=parseInt(dif/1000/60%60);
    var m1=fn(m);
    str='申请时间剩余：'+day1+'天'+h+'小时'+m+'分钟';
    nav_p.innerHTML=str;
    if(day<=0&&h<=0&&m<=0){
        clearInterval(timer);
        nav_p.innerHTML='试用申请结束';
    }
}
timego()
var timer=setInterval(timego,1000);
// 热门试用 轮播图
var slide_list=document.getElementsByClassName('slide_list');
var hot_slide=document.getElementsByClassName('hot_slide')[0];
var timer=null;//ul切换
var timer1=null;//ul分步，动起来
var index=0;//ul下标
function move(){
    timer=setInterval(function(){
        index++;
        if(index>=slide_list.length){
            index=0;
        }
        var step=0;
        var maxstep=40;
        var start=hot_slide.scrollLeft;
        var end=slide_list[0].offsetWidth*index;
        var everystep=(end-start)/maxstep;
        timer1=setInterval(function(){
            step++;
            if(step>=maxstep){
                step=0;
                clearInterval(timer1);
            }
            start +=everystep;
            hot_slide.scrollLeft=start;
        },12)
        var pre=document.getElementsByClassName('pre')[0];
        var next=document.getElementsByClassName('next')[0];
        // pre.onclick=function(){
        //     clearInterval(timer);
        //     index--;
        //     timer1=setInterval(function(){
        //         step--;
        //         if(step>=maxstep){
        //             step=0;
        //             clearInterval(timer1);
        //         }
        //         start -=everystep;
        //         hot_slide.scrollLeft=start;
        //     },12)
            
        // }
        // next.onclick=function(){
        //     clearInterval(timer); 
        //     index++;
        //     timer1=setInterval(function(){
        //         step++;
        //         if(step>=maxstep){
        //             step=0;
        //             clearInterval(timer1);
        //         }
        //         start +=everystep;
        //         hot_slide.scrollLeft=start;
        //     },12)
        // }
        // hot_slide.onmouseenter=function(){
        //     clearInterval(timer);
        //     clearInterval(timer1);
        //     move();
        // }
    },2500)
}
move();
// 发现酷玩
window.onload=function(){
    setTimeout(getData,300)
}
    //1、设置存放数据的数组
var dataList=[];
    //2、ajax请求 请求后将数据放入数组dataList
function getData(){
    var ajax=new XMLHttpRequest()||new ActiveXObject('Microsoft.XMLHTTP');
    ajax.open('get','http://127.0.0.1:3000/play/new');
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
var main_box=document.getElementsByClassName('main_box')[0];
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
        main_box.appendChild(ul);
        
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

// like words
// var like1=document.getElementsByClassName('report_a_box_sp1');
// var words1=document.getElementsByClassName('report_a_box_sp2');
// for (var i=0;i<like1.length;i++){
//     var like1a=document.getElementsByClassName('report_a_box_sp1')[i].firstChild.nodeValue-0;
//     var words1a=document.getElementsByClassName('report_a_box_sp2')[i].firstChild.nodeValue-0;
//     like1[i].onclick=function(){
//         like1a ++;
//         this.innerHTML=like1a;
//     }
// }
// var like2=document.getElementsByClassName('shoppers_item1_sp1');
// var words2=document.getElementsByClassName('shoppers_item1_sp2');
// for (var i=0;i<like2.length;i++){
//     var like2a=document.getElementsByClassName('shoppers_item1_sp1')[i].firstChild.nodeValue-0;
//     var words2a=document.getElementsByClassName('shoppers_item1_sp2')[i].firstChild.nodeValue-0;
//     like2[i].onclick=function(){
//         like2a ++;
//         this.innerHTML=like2a;
//     }
//     like2[i].onmouseenter=function(){
//         this.className='shoppers_item1_sp11';
//     }
//     like2[i].onmouseleave=function(){
//         this.className='shoppers_item1_sp1';
//     }
// }


