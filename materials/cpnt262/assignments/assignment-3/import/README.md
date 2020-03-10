# Gallery import script
In this directory, you should find four files:
- `import.js`: contains the code that will connect to MongoDB and insert your data.
- `gallery.js`: contains the gallery information as an array of js objects. This data is inserted into MongoDB 
- `package.json` and `package-lock.json`: contains the dependencies for the `import.js`

## Usage Instructions
1. Add a .env file with your MongoDB connection string.
2. In your terminal, navigate to the directory containing the `import.js` file.
3. Install dependencies with `npm install`
4. Run the import script with `node import.js`

Warning: this script will empty the Collection before inserting. Use with caution.