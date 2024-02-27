//문제설명
/*
자연수 n이 매개변수로 주어집니다. 
n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를
return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.
*/

//내 솔루션
function solution(n) {
    var answer = 0;
    var arr=[];
    for(i=1; i<n; i++){
        if(n%i==1){
            arr.push(i);
        }
    }
    answer=arr[0];
    return answer;
}

//다른 분 솔루션
const solution = function(n) {
    for (let i=0; i<n; i++){
        if (n%i == 1){
            return i
        }
    }
}
//쉬운 문제라고 느껴졌다.