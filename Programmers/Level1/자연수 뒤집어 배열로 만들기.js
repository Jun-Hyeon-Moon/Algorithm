//문제설명
/*
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
*/

//내 솔루션
function solution(n) {
    var answer = [];
    var word=String(n);
    for(i=word.length-1; i>=0; i--){
        answer.push(parseInt(word[i]));
    }
    return answer;
}

//다른 분 솔루션
function solution(n) {
    // 문자풀이
    // return (n+"").split("").reverse().map(v => parseInt(v));

    // 숫자풀이
    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}
//문자풀이는 n+""로 숫자를 문자로 변환 후 split("")으로 배열로 쪼개기
//숫자풀이는 do~while문