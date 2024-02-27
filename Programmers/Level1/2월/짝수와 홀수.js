//문제설명
/*
정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
*/

//내 솔루션
function solution(num) {
    var answer = '';
    if(num%2==0){
        answer+='Even';
    }else{
        answer+='Odd';
    }
    return answer;
}

//다른 분 솔루션
function evenOrOdd(num) {
    return num % 2 ? "Odd" : "Even"
}
//삼항연산자를 생각하긴 했었는데 num%2 뒤에 ===0 조건을 안 주고 간단하게 사용하는 것이 인상깊었다.