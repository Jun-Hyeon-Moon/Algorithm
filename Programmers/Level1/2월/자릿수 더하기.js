//문제설명
/*
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
*/

//내 솔루션
function solution(n)
{
    var answer = 0;
    var word=String(n);
    for(i=0; i<word.length; i++){
        answer+=parseInt(word[i]);
    }  

    return answer;
}

//다른 분 솔루션
function solution(n){
    
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}
//reduce의 initial value는 첫 acc 값
//즉, 0을 넣어서 acc 초기값을 정수화 해줌("문자열 + 정수 = 문자열" 방지차원) 
//initial value를 지정하지 않는다면 parseInt(acc) + parseInt(curr)로 하면 됌