let totalBudget = document.querySelector(".totalBudget")
let totalBudgetBtn = document.querySelector(".totalBudgetBtn")
let totalCount = document.querySelector(".totalCount")
let expenseReason = document.querySelector(".expenseReason")
let expenseValue = document.querySelector(".expenseValue")
let expenseBudgetbtn = document.querySelector(".expenseBudgetbtn")
let expenseCount = document.querySelector(".expenseCount")
let balanceCount = document.querySelector(".balanceCount")
let expenseUl = document.querySelector(".expenseUl")

totalBudgetBtn.addEventListener("click", () => {
    setTotalCount();
});
expenseBudgetbtn.addEventListener("click", () => {
    setExpenseCount();
});

function setTotalCount() {
    let total = totalBudget.value;
    if (total == "" || total < 0) {
        alert("Enter valid Budget");
    } else {
        console.log(total);
        totalCount.innerText = total;
        balanceCount.innerText = parseInt(totalCount.innerText) - parseInt(expenseCount.innerText);
        console.log(balanceCount.innerText);
    }
    totalBudget.value = "";    
}
function setExpenseCount() {
    let expense = parseInt(expenseCount.innerText) + parseInt(expenseValue.value );
    if (expenseValue.value == "" || expenseValue.value < 0 || expenseReason.value == "") {
        alert("Enter valid expense");
        return;
    } else if(totalCount.innerText == "0"){
        alert("Enter Budget before Expense");
        return;
    }else{

        console.log(`Total = ${totalCount.innerText} `);
        console.log(expense);
        expenseCount.innerText = expense;
        balanceCount.innerText = parseInt(totalCount.innerText) - parseInt(expenseCount.innerText);
    }
    addToExpenseList();

}

function addToExpenseList() {
    let listItem = document.createElement("li");
    let listExpense = document.createElement("p");
    let listExpenseValue = document.createElement("p");
    let listOption = document.createElement("div");
    let listEdit = document.createElement("i");
    let listDelete = document.createElement("i");
    expenseUl.appendChild(listItem);
    listItem.appendChild(listExpense);
    listItem.appendChild(listExpenseValue);
    listItem.appendChild(listOption);
    listOption.appendChild(listEdit);
    listOption.appendChild(listDelete);
    listItem.classList.add("block");
    listOption.classList.add("options");
    listEdit.classList.add("fa-solid", "fa-pen-to-square", "edit","btn");
    listDelete.classList.add("fa-solid", "fa-trash-can", "delete","btn");
    listExpense.innerText = expenseReason.value;
    listExpenseValue.innerText = expenseValue.value;
    expenseReason.value = "";

    listEdit.addEventListener("click", () => {
        expenseCount.innerText = parseInt(expenseCount.innerText) - parseInt(listExpenseValue.innerText);
        balanceCount.innerText = parseInt(balanceCount.innerText) + parseInt(listExpenseValue.innerText);
        expenseReason.value = listExpense.innerText;
        console.log(expenseCount);
        expenseValue.value = listExpenseValue.innerText;
        expenseUl.removeChild(listItem);
    });
    listDelete.addEventListener("click", () => {
        expenseCount.innerText = parseInt(expenseCount.innerText) - parseInt(listExpenseValue.innerText);
        balanceCount.innerText = parseInt(balanceCount.innerText) + parseInt(listExpenseValue.innerText);
        expenseUl.removeChild(listItem);
    });
    expenseValue.value = "";

}
