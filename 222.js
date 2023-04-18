window.onload=function () {
    var text = document.getElementById('t');
    f.onsubmit = function () {
        if(isEmptyStr(text.value)){
            text.value=' ';
            window.alert("还妹输入东西呢！");
        }
        if (text.value.length<5&&text.value.length>=1) {
            text.value=' ';
            window.alert("不足5字符");
        }
}
}

function isEmptyStr(s) {
    if (s == null || s === '') {
        return true
    }
    return false
}
