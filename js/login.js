var user=document.getElementsByName('user')[0];
var psw=document.getElementsByName('password')[0];
user.onfocus=function(){
    this.placeholder='';
}
user.onblur=function(){
    var value0=user.value;
    reg=/^[a-zA-Z]{3}[0-9]{6}$/;
    var cookies = document.cookie;
    var arry=cookies.split(';');
    for(var i=0;i<arry.length;i++){
        var newArry=arry[i].split('=');
        if(newArry[0]==' username'){
            var numname=newArry[1];
        }   
    }  
    if(reg.test(value0)==true&&value0==numname){ 
        this.className='color'; 
        
    }else if(value0.length==0){
        this.placeholder='用户名不能为空，请输入';              
    }
    else if(reg.test(value0)==true&&value0!=numname){
        this.placeholder='用户名不存在，请先注册';              
    }else{
        this.placeholder='用户名输入错误，请重新输入'; 
    }   
}
psw.onfocus=function(){
    this.placeholder='';
}
psw.onblur=function(){
    var value1=psw.value;
    reg=/^[0-9]{6}$/;
    var cookies = document.cookie;
    var arry=cookies.split(';');
    for(var i=0;i<arry.length;i++){
        var newArry=arry[i].split('=');
        if(newArry[0]==' password'){
            var numpsw=newArry[1];
        }
    }  
    if(reg.test(value1)==true&&value1==numpsw){ 
        this.className='color'; 
        
    }else if(value1.length==0){
        this.placeholder='用户名不能为空，请输入';              
    }
    else if(reg.test(value1)==true&&value1!=numpsw){
        this.placeholder='用户名不存在，请先注册';              
    }else{
        this.placeholder='用户名输入错误，请重新输入'; 
    }   
}
function login(){
    if(user.className=='color'&&psw.className=='color'){
        window.open('../index.html');
    }
    else{
        alert('信息填写错误，请重新填写');
    }
}