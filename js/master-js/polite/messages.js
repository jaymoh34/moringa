/*
Node js<fs>
For your data in the .json file.
For each applicant data.
Create a message: to inform him/her
that he/she did not get the job.
<meet qualification>
But be on the lookout for
new opportunities from us in the future.
*/
// Step 1: Access the data
const data = require(`./data.json`);
const fs = require("fs");



// Step 2: Print all data

for (let i = 0; i < data.length; i++) {
    console.log(`Data ${i + 1}:`, data[i]);
}

// Step 3: Generate messages
for (let i = 0; i < data.length; i++) {
    const doc = data[i];
    
    let title = "";
    if (doc.gender === "Male") {
        title = "Sir";
    } else if (doc.gender === "Female") {
        title = "Madam";
    } 
    
    const message = `Dear ${title} ${doc.first_name} ${doc.last_name}. We regret to inform you that you will not proceed in the next round of interviews.`;
    console.log(message);
}

// Step 4: Create output array with messages
const outputData = [];

for (let i = 0; i < data.length; i++) {
    const doc = data[i];
    
    let title = "";
    if (doc.gender === "Male") {
        title = "Sir";
    } else if (doc.gender === "Female") {
        title = "Madam";
    } 
        
    const message = `Dear ${title} ${doc.first_name} ${doc.last_name}. We regret to inform you that you will not be going to the next stage of the interview. Reason: You are not a good fit for this position.`;
    
    // Create object with all user data + message
    const newObj = {
        "id": doc.id,
        "first_name": doc.first_name,
        "last_name": doc.last_name,
        "email": doc.email,
        "gender": doc.gender,
        "phone": doc.phone,
        "title": title,
        "message": message
    };
    
    outputData.push(newObj);
}

console.log(` Total records: ${outputData.length}`);
console.log("Sample:", outputData[0]);

// Step 5: Write to file

const fs = require('fs');
const outputText = JSON.stringify(outputData, null, 2);
fs.writeFileSync("output.json",outputText, (error) => {});

console.log(` Records written: ${outputData.length}`);