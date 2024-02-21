//문제설명
/*
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 
예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
*/

//내 솔루션
function solution(x) {
    var answer = true;
    var word=String(x);
    var div=0;
    for(i=0; i<word.length; i++){
        div+=parseInt(word[i])    
    }
    if(x%div==0){
            return answer;
        }else{
            return false;
        }
}

//다른 분 솔루션
function solution(x) {
    let num = x;
    let sum = 0;
    do {
        sum += x%10;
        x = Math.floor(x/10);
    } while (x>0);

    return !(num%sum);
}
//for문 대신 do while문 js에서 0은 false 1은 true