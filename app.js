// inp 인풋 변수할당 (대출금액, 대출기간, 대출금리 인풋)
const inpLoanAmount = document.querySelector(".put-loan-amount");
const inpLoanPeriod = document.querySelector(".put-loan-period");
const inpLoanInterest = document.querySelector(".put-loan-interest");

// btn 버튼 변수할당 (계산버튼, 리셋버튼)
const btnCal = document.querySelector(".cal");
const btnReset = document.querySelector(".reset");

// 상환방법 라디오 버튼(만기, 원금균, 원리금균)
const inpMethodFirst = document.querySelector(".method-first");
const inpMethodSecond = document.querySelector(".method-second");
const inpMethodThird = document.querySelector(".method-third");

// 계산결과 (총납입금액, 총이자)
const valuePayment = document.querySelector(".value-payment");
const valueInterest = document.querySelector(".value-interest");

// 계산결과 디테일 (회차, 납입금액, 원금, 이자 ,잔금) - 보류



function comma(){
    let x = inpLoanAmount.value;
    let y = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    console.log(y);
    inpLoanAmount.value = y;
}

inpLoanAmount.addEventListener("keydown", comma);
