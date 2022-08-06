var result = document.getElementById('inp');
function getvalue(num){
    result.value += num;
}
function equal(){
result.value = eval(result.value)
}
function Clear(){

    var result1 = document.getElementById('inp');
    result1.value = '';

}