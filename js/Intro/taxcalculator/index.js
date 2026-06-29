/*
prompt("")

checking if is a number
1.isNaN
2.Number
3.+<>
*/

let grossMonthlySalary= null;
while (true){
    let gross=prompt("Enter your gross salary");

    if (isNaN(gross)=== false) {
       gross = Number(gross);
        if (gross > 0){
            grossMonthlySalary = gross;
            break;
        }
    }
    alert('Invalid amount entered.\nEnsure you enter a number greater than 0');
}
console.log(
    `Gross salary is ${grossMonthlySalary} its type ${typeof grossMonthlySalary}`
);

//calculate PAYE
let PAYE =null;
let tier =null;
if(grossMonthlySalary<24000){
    paye =grossMonthlySalary * (10/100);
    tier =" Paye 0-24,000"
}

if(grossMonthlySalary>24000 && grossMonthlySalary<=32333){
    paye =grossMonthlySalary * (25/100)
    tier ="Paye 24,000-32,333 KES"
}

if(grossMonthlySalary>32333 && grossMonthlySalary <=500000){
    paye =grossMonthlySalary * (30/100)
    tier ="Paye 32,333-500,000 KES"  
}

if(grossMonthlySalary>500000 && grossMonthlySalary <= 800000){
    paye =grossMonthlySalary * (32.5/100)
    tier ="Paye 500,000-800,000 KES"
}

if(grossMonthlySalary>800000){
    paye =grossMonthlySalary * (35/100)
    tier ="Paye 800,000-infinity KES"
}

alert(`Paye is ${paye} and tier level is ${tier}`);

//calculate NSSF
let taxableIncome =47000;
let currentTier =null;
let paye =null;

const bracket1 = 24000;
const bracket2 = 32333;
const bracket3 = 500000;
const bracket4 = 800000;

const band1 = bracket1 * 0.1
const band2 = (bracket2 - bracket1)
const band3 = (bracket3 - bracket2)
const band4 = (bracket4 - bracket3)

const personal_relief = 2400
 if(taxableIncome <= 24000){
    paye = taxableIncome * 0.1
    paye_tier ="Paye 0-24000 KES"
 }else if(taxableIncome <= 32333){
    let diff = taxableIncome - 24000
    let tax = diff *0.25
    paye = tax + band1
    paye_tier = "Paye 24000-32333 KES"
 }else if(taxableIncome <= 500000){
    let diff = taxableIncome - 32333
    let tax  =diff *0.3
    paye = tax + band1 + band2
    paye_tier = "Paye 32333-500000 KES"
 }else if(taxableIncome<=800000){
    let diff = taxableIncome - 500000
    let tax = diff * 0.325
    paye = tax + band1 + band2 + band3
    paye_tier = "Paye 500000-800000 KES"
 } else{
    let diff = taxableIncome - 800000
    let tax = diff * 0.35
    paye = tax + band1 + band2 + band3 + band4
    paye_tier ="Paye 800000 to infinity KES"
 }

 const final_paye =Math.max(0,paye - personal_relief)

 alert(`Taxable Income ${taxableIncome}
    Paye ${paye}
    Personal Relief ${personal_relief}
    Final Paye ${final_paye}
    Tier${paye_tier}
    `);

    const shif = grossMonthlySalary * (2.75/100)
    const housingLevy =grossMonthlySalary * (1.5/100)
    
    const totalDeduction = final_paye + nssf + shif +housingLevy
    const netSalary = grossMonthlySalary - totalDeduction

    alert(`For gross salary ${grossMonthlySalary}
        nssf ${nssf} tier ${nssftier}
        taxable Income ${taxableIncome}
        paye ${paye} tier ${paye_tier}
        shif ${shif}
        housing ${housingLevy}
        totalDeduction ${totalDeduction}
        Take Away ${netSalary}
        `);