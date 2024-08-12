function calculateLoan() {
    let need = parseFloat(document.getElementById("amount").value);
    let months = parseInt(document.getElementById("months").value);
    
    let deposite = Math.round(need * 0.07);
    let bank_interest = (need * 0.05) / 12;
    let total_interest = Math.round(bank_interest * months);
    let bank_charge = 15000;
    let total_cost = Math.round(total_interest + bank_charge);
    
    document.getElementById("deposit").innerText = "The Amount of Deposit: " + deposite;
    document.getElementById("interest").innerText = "The Interest: " + total_interest;
    document.getElementById("totalCost").innerText = "Total Cost of Customer: " + total_cost;
}
