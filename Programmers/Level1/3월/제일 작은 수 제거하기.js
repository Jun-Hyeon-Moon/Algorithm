//문제설명
/*
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 
단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 
예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.
*/

//내 솔루션
function solution(arr) {
    var answer = [];
    var count=0;
    if(arr.length==1){
        answer.push(-1);
        return answer;
    }
    for(j=0; j<arr.length; j++){
        if(arr[0]<arr[j]){
            count++;
        }
        arr.splice((arr.length-count-1),1);
        return arr;
    }
}

//다른 분 솔루션
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}
//배열 spread 함수를 통해 Math.min 함수를 사용