var phone=document.getElementsByName('phone')[0];
var yanzheng=document.getElementsByName('yanzheng')[0];
var numyan=document.getElementsByName('numyan')[0];
var user=document.getElementsByName('user')[0];
var psw=document.getElementsByName('password')[0];
var pswag=document.getElementsByName('passwordag')[0];
var btn=document.getElementsByClassName('form_btn')[0];
var reg=document.getElementsByClassName('reg')[0];
// 手机号
phone.onfocus=function(){
    this.placeholder='';
}
phone.onblur=function(){
    var str1=this.value;
    reg=/^1[3-9][0-9]{9}$/;
    console.log(reg.test(str1));
    if(reg.test(str1)==true){
        this.className='color';
         //cookie  
        var time = new Date();
        time.setDate(time.getDate()+2);
        document.cookie="phone="+str1 +";expires="+time; 
    }else if(str1.length==0){
        this.value='';
        this.placeholder='用户名不能为空，请重新输入';
    }else{
        this.value='';
        this.placeholder='用户名输入错误，请重新输入';
    }
}
// 校验码
yanzheng.onfocus=function(){
    this.placeholder='';
}
yanzheng.onblur=function(){
    var str2=this.value;
    if(str2=='r2B7'){
        this.className='color';
    }else if(str2.length==0){
        this.value='';
        this.placeholder='校验码不能为空，请重新输入';
    }else{
        this.value='';
        this.placeholder='校验码输入错误，请重新输入';
    }
}
// 验证码
btn.onclick=function(){
    function identify(){
        var value1=Math.round(Math.random()*10000);
        value1=value1>1000?value1:value1+1000;
        return value1;     
    } 
    var str3=identify();
    // console.log(str3);
    btn.innerHTML=str3;
    return str3;
}

numyan.onfocus=function(){
    this.placeholder='';
}
numyan.onblur=function(){
    console.log(btn.innerHTML);
    var str4=this.value;
    if(str4==btn.innerHTML){
        this.className='color';
    }else if(str4.length==0){
        this.value='';
        this.placeholder='验证码不能为空，请重新输入';
    }else{
        this.value='';
        this.placeholder='验证码输入错误，请重新输入';
    }
}
// 用户名
user.onfocus=function(){
    this.placeholder='';
}
user.onblur=function(){
    var str5=this.value;
    reg=/^[a-zA-Z]{3}[0-9]{6}$/;
    console.log(reg.test(str5));
    if(reg.test(str5)==true){
        this.className='color';
       //cookie  
       var time = new Date();
       time.setDate(time.getDate()+2);
       document.cookie="username="+str5 +";expires="+time;       
    }else if(str5.length==0){
        this.value='';
        this.placeholder='用户名不能为空，请重新输入';
    }else{
        this.value='';
        this.placeholder='用户名输入错误，请重新输入';
    }
}
psw.onfocus=function(){
    this.placeholder='';
}
psw.onblur=function(){
    var str6=this.value;
    reg=/^[0-9]{6}$/;
    if(reg.test(str6)==true){
        this.className='color';
       //cookie  
       var time = new Date();
       time.setDate(time.getDate()+2);
       document.cookie="password="+str6 +";expires="+time;  
    }else if(str6.length==0){
        this.value='';
        this.placeholder='密码不能为空，请重新输入';
    }else{
        this.value='';
        this.placeholder='密码输入错误，请重新输入';
    }
}
pswag.onfocus=function(){
    this.placeholder='';
}
pswag.onblur=function(){
    var str7=this.value;
    if(str7==psw.value){
        this.className='color';     
    }else if(str7.length==0){
        this.value='';
        this.placeholder='密码不能为空，请重新输入';
    }else{
        this.value='';
        this.placeholder='密码输入错误，请重新输入';
    }
}
function register(){
    if(phone.className=='color'&&yanzheng.className=='color'&&numyan.className=='color'&&user.className=='color'&&psw.className=='color'&&pswag.className=='color'){
        window.open('../public/login.html');
    }
    else{
        alert('信息填写错误，请重新填写');
    }
}