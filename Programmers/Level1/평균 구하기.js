//문제설명
/*
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
*/

//내 솔루션
function solution(arr) {
    var answer = 0;
    for(i=0; i<arr.length; i++){
        answer+=arr[i];
    }
    answer=answer/arr.length;
    return answer;
}

//다른 분 솔루션
function average(array){
    return array.reduce((a,b) => a+b) / array.length;
}

//배열의 길이가 커질수록 reduce보다 for문이 속도가 훨씬 빠르다는 점도 참고!