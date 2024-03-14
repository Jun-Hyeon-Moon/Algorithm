//문제설명
/*
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요.
예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.
*/

//내 솔루션
function solution(n) {
    return "수박".repeat(n).substring(0,n)
}

//다른 분 솔루션
var waterMelon = n =>'수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');