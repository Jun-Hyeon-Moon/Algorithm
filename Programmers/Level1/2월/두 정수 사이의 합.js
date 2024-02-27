//문제설명
/*
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
*/

//내 솔루션
function solution(a, b) {
    var answer = 0;
    var min = Math.min(a, b);
    var max = Math.max(a, b);
    
    for(i=min; i<=max; i++) answer+=i;
    
    return answer;
}

//다른 분 솔루션
function adder(a, b){
    var result = 0
   
    return (a+b) * (Math.abs(a-b)+1) / 2;
}
//가우스 : 양 끝의 합* 양 끝의 합의 개수