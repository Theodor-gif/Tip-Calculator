"use strict";

const peopleAmountInput = document.querySelector("#people");
const billAmountInput = document.querySelector("#bill");
const tipAmountInput = document.querySelector("#tip");
const submitButton = document.querySelector("#submit-button");
const resetButton = document.querySelector("#reset-button");
const resultScreen = document.querySelector("#result-container");
const totalAmount = document.querySelector("#total-amount");
const eachPersonAmount = document.querySelector("#person-amount");

let billAmount;
let tipAmount;
let numberOfPeople;
let total;
let totalEachPerson;

function defaultSettings() {
  totalAmount.value = "";
  eachPersonAmount.value = "";
}

function peopleAmount() {
  numberOfPeople = peopleAmountInput.value;
  return numberOfPeople;
}

function billCost() {
  billAmount = billAmountInput.value;
  return billAmount;
}

function tip() {
  tipAmount = tipAmountInput.value;
  return tipAmount;
}

function totalCost() {
  total = Number(billAmount) + Number(tipAmount);
  return total;
}

function divideAmount() {
  let divideTotal = total / numberOfPeople;
  totalEachPerson = Number(divideTotal);

  return totalEachPerson;
}

function printResult() {
  totalAmount.value = total;
  eachPersonAmount.value = totalEachPerson.toFixed(2);
}

function inputTypeError() {
  const people = peopleAmountInput.value.trim();
  const bill = billAmountInput.value.trim();
  const tipValue = tipAmountInput.value.trim();

  if (
    people === "" ||
    bill === "" ||
    tipValue === "" ||
    isNaN(people) ||
    isNaN(bill) ||
    isNaN(tipValue) ||
    Number(people) <= 0
  ) {
    totalAmount.value = "";
    eachPersonAmount.value = "";
    return true;
  }

  return false;
}

function peopleNumber() {
  const people = peopleAmountInput.value.trim();
  if (/^-?\d+\.\d+$/.test(people)) {
    console.log("error");
    totalAmount.value = "";
    eachPersonAmount.value = "";
    return true;
  }
  return false;
}

submitButton.addEventListener("click", () => {
  if (inputTypeError()) return;
  if (peopleNumber()) return;
  peopleAmount();
  billCost();
  tip();
  totalCost();
  divideAmount();
  printResult();
});

resetButton.addEventListener("click", () => {
  peopleAmountInput.value = "";
  billAmountInput.value = "";
  tipAmountInput.value = "";
  billAmount = 0;
  tipAmount = 0;
  numberOfPeople = 0;
  total = 0;
  totalEachPerson = 0;
  totalAmount.value = "";
  eachPersonAmount.value = "";
});

defaultSettings();
