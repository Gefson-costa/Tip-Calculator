const bill = document.querySelector(".bill")
const percentage = document.querySelector(".percentage")
const calculate = document.querySelector(".calc")
const total = document.querySelector(".total")


function calculateTotal() {
    const percent = (Number(percentage.value) * Number(bill.value)) / 100
    return Number(bill.value) + percent
}

calculate.addEventListener("click", (e) => {
    e.preventDefault()
    total.textContent = calculateTotal()
})