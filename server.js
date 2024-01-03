const express = require("express");
const application = express();
const fs = require("fs");
const csvParser = require("csv-parser");
const db = require("./models");
var dot = require('dot-object');
application.use(express.json());

application.post("/", async (req, res) => {
  const filePath = "sample.csv";
  const body = req.body;
  const csvReadStream = fs.createReadStream(filePath);
  csvReadStream.pipe(csvParser())
  .on("data", async (Data) => {
    try {
      // Check the column headers and insert into the appropriate tables
    const allData = {};

    // Loop through each key in body
    for (const key in body) {
      // Check if the key belongs to the object itself (not inherited from prototype)
      if (body.hasOwnProperty(key)) {
        // Get the value associated with the current key in body
        const valueFrombody = body[key];

        // Look up the corresponding value in Data using the value from body
        const correspondingValueInrow = Data[valueFrombody];

        // Assign the key from body and its corresponding value from Data to the new object
        allData[key] = correspondingValueInrow;
      }
    }    
    dot.object(allData);
  
    let { account, location, contact } = allData;
 
    const accountId = await accountTable(account);
    await db.account.build(account).validate();

    let locationId = await locationTable(Data,location, accountId);

    await contactTable(accountId,locationId,contact);

    } catch (error) {
      console.log("error occures",error)
    }
  })
  .on("end", () => {
    res.send("Data Successfully inserted.");
  });
});

async function accountTable(account){
  try {
    await db.account.build(account).validate();
    const result = await db.account.create(account);
    return result.dataValues.id;
  } catch (error) {
    console.error("Error inserting data into Account Table:", error);
    return null;
  }
}

async function locationTable(Data,location,accountId){
  try {

    let locationKeys=Object.keys(location)
    const locationData={}

   
    for (let i = 0; i < locationKeys.length; i++) {

      try {
        locationData[locationKeys[i]] = JSON.parse(Data[locationKeys[i]]);
      } catch (error) {
        locationData[locationKeys[i]] = Data[locationKeys[i]];
      }
    }
    locationData.accountId = accountId;
    await db.location.build(locationData).validate();
    const result = await db.location.create(locationData);
    return result.dataValues.id;

  } catch (error) {
    console.error("Error inserting data into location Table:", error);
    return null;
  }
}

async function contactTable(accountId,locationId,contact){
try {
  contact.accountId=accountId
  contact.locationId=locationId
  await db.contact.build(contact).validate()
  const result=await db.contact.create(contact)
  return result
} catch (error) {
  console.error("Error inserting data into location Table:", error);
  return null;
}
}
application.listen(9000, () => {
  console.log("Server running on port 9000");
});
