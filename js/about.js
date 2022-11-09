var select_=document.getElementsByClassName('select');
var content_=document.getElementsByClassName('mainbox');
for(var i=0;i<select_.length;i++){
    select_[i].setAttribute('index',i);
    select_[i].onclick=function(){
        var index_=this.getAttribute('index');
        for(var k=0;k<content_.length;k++){
            content_[k].style.display='none';
            content_[index_].style.display='block';
        }
    }  
}