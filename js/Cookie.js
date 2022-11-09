//创建cookie
function setCookie(key,val,time){
    var date=new Date();
    date.setDate(date.getDate()+time);
    document.cookie=key+'='+val+';expires='+date;
}
//获取cookie
// function getCookie(key){
//     var arry=cookie.split('; ');
//     for(var item of arry){
//         var newArry=item.split('=');
//         if(item[0]==key){
//             return item[1];
//         }
//     }
// }
function getCookie(key){
    var arry=cookie.split(';');
    for(var i=0;i<arry.length;i++){
        var newArry=arry[i].split('=');
        var key_=newArry[0].replace(/^\s/,'');
        if(key_==key){
            return newArry[1];
        }
    }
}
//删除cookie
function removeCookie(key){
    this.setCookie(key,'',-1);
}
//清空cookie
function clearCookie(key){
    var cookieArry=document.cookie.split('; ');
    for(var item of cookieArry){
        var newArry=item.split('=');
        this.setCookie(newArry[0],'',-1);
    }
}
// 创建cookie   setCookie
                 // 键 值  时间
function setCookie(key,val,time){
    var date = new Date();
    date.setDate(date.getDate()+time);
    document.cookie=`${key}=${val};expires=${date}`;
}

// 获取cookie   getCookie
function getCookie(key){
    var arry=document.cookie.split('; ');
    for(var item of arry){
        var newArry=item.split('=');
        if(newArry[0]==key){
            return newArry[1];
        }
    }
}

// 删除cookie removeCookie
function removeCookie(key){
    this.setCookie(key,'',-1);
}

//清空cookie
function clearCookie(){
    var arry=document.cookie.split(';');
    for(var item of arry){
        var newArry= item.split('=');
        this.setCookie(newArry[0],'',-1);
    }
}