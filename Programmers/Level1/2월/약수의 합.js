//문제 설명
/*
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
*/

//내 솔루션
function solution(n) {
    var answer = 0;
    for (let i=1; i<=n; i++) {
        if (n%i===0) answer += i
    }
    return answer;
}

//다른 분 솔루션
function solution(n) {
    var answer = 0;
    let i;
    for (i = 1; i <= Math.sqrt(n); i++){
        if (!(n%i)) {
            answer += (i+n/i);
        }
    }
    i--;
    return (i === n/i) ? answer-i : answer;
}
//약수를 구할 때 짝궁을 바로바로 더해주도록 하는 로직