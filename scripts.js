function calculateBudget() {
    const projectCost = document.getElementById('projectCost').value;
    const materialCost = document.getElementById('materialCost').value;
    const laborCost = document.getElementById('laborCost').value;
    const miscExpenses = document.getElementById('miscExpenses').value;
    const permitFees = document.getElementById('permitFees').value;
    const insuranceCost = document.getElementById('insuranceCost').value;
    const contingency = document.getElementById('contingency').value;
    const overhead = document.getElementById('overhead').value;
    const consultancyFee = document.getElementById('consultancyFee').value;

    if (projectCost && materialCost && laborCost && miscExpenses && permitFees && insuranceCost && contingency && overhead && consultancyFee) {
        const totalBaseCost = parseFloat(projectCost) + parseFloat(materialCost) + parseFloat(laborCost) + parseFloat(miscExpenses) + parseFloat(permitFees) + parseFloat(insuranceCost);
        const contingencyAmount = (totalBaseCost * contingency) / 100;
        const overheadAmount = (totalBaseCost * overhead) / 100;
        const consultancyAmount = (totalBaseCost * consultancyFee) / 100;
        const totalCost = totalBaseCost + contingencyAmount + overheadAmount + consultancyAmount;

        document.getElementById('result').innerHTML = 
            `Total Base Cost: ₹${totalBaseCost.toFixed(2)}<br>` +
            `Contingency: ₹${contingencyAmount.toFixed(2)}<br>` +
            `Overhead: ₹${overheadAmount.toFixed(2)}<br>` +
            `Consultancy Fee: ₹${consultancyAmount.toFixed(2)}<br>` +
            `Total Cost: ₹${totalCost.toFixed(2)}`;
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid values in all fields.';
    }
}
