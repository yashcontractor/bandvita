// Import the necessary module using CommonJS syntax
const { useEffect } = require('react');
const fs = require('fs'); // Import the 'fs' module to work with files
const path = require('path'); // Import the 'path' module to handle file paths

// Define your Azure.js module logic
const fetchDataAndExport = async () => {
  try {
    // Import necessary modules
    const { CosmosClient } = require('@azure/cosmos');

    // Initialize Cosmos DB client
    const cosmosClient = new CosmosClient({
      endpoint: 'https://capstonecosmosdb.documents.azure.com:443/',
      key: '', //insert key
    });

    // Connect to Cosmos DB
    const database = cosmosClient.database('SampleDB');
    const container = database.container('SampleContainer');

    // Query data from Cosmos DB
    const { resources: data } = await container.items.readAll().fetchAll();

    // Convert data to JSON
    const jsonData = JSON.stringify(data, null, 2);

    // Specify the file path relative to the current directory
    const filePath = path.join(__dirname, '..', 'components', 'cosmos_db_data.json'); // Assuming 'components' is the subfolder

    // Write the JSON data to a file
    fs.writeFileSync(filePath, jsonData);

    console.log('Data exported successfully to', filePath);
  } catch (error) {
    console.error('Error exporting data:', error);
  }
};

// Execute the export logic
fetchDataAndExport();
