window.onload=function () {
    var u =document.getElementById('username');
    var p =document.getElementById('passwd');
    var c =document.getElementById('check');
    var f =document.getElementById('form');
    if(getcookies('username')&&getcookies('passwd')){
        u.value=getcookies(username).value;
        p.value=getcookies(passwd).value;
        c.checked=true;
    }
    c.onchange=function(){
        if(!this.checked){
            delcookie('username');
            delcookie('passed');
        }

    }
    f.onsubmit=function (){
        if(c.checked){
            setCookie('username',u.value,3); //保存帐号到cookie，有效期7天
            setCookie('passwd',p.value,3); //保存密码到cookie，有效期7天
        }
    }
}
function setcookies(name,value,day){
    var date =new Date();
    date.setDate(date.getDate()+day);
    document.cookie= name+"="+value+";expire="+day;
}
function getcookies(name){
    var ex=RegExp(name+'=([^;])+');
    var arr=document.cookie.match(ex);
    if(arr){
        return arr[1];
    }
    else
    {
        return " ";
    }
}

function delcookie(){
    setcookies(name=null,null,-1);
}
