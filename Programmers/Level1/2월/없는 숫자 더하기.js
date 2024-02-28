//문제설명
/*
0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
*/

//내 솔루션
function solution(numbers) {
    var num=[0,1,2,3,4,5,6,7,8,9];
    var answer=num.filter(x=> !numbers.includes(x));
    var sum=0;
    answer.forEach(function(x){
       sum+=x; 
    });
    return sum;
}

//다른 분 솔루션
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
//전체 합으로 계산할 수 있었다! reduce 함수는 덤