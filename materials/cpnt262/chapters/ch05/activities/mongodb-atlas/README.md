# Activity: Connecting to MongoDB Atlas
## MongoDB Atlas
ref: https://docs.atlas.mongodb.com/getting-started/

1. Create MongoDB Atlas account
2. Create cluster
    - I chose AWS N. Oregon
3. Whitelist your IP *fingers crossed*
4. Copy and paste Connection URI into [.env file](https://www.npmjs.com/package/dotenv). You can find this URL in either Atlas or Compass.
    - Make sure you have the following added to your .gitignore file (environment variables should never be push to a public -- or even private -- repo). There is a sample file in this directory.

      ```
        .env
        .env.test
      ```

5. run starter/app.js to test connection

Note: if you're on campus you may need to turn on your VPN.

## Install Local MongoDB Server
- Install on your host machine (Windows/mac)
  - See: [MongoDB Community Server Download Centre](https://www.mongodb.com/download-center/community)

## Install MongoDB Compass
- Install the MongoDB GUI tool to manage your local server
  - See: [MongoDB Compass Download Centre](https://www.mongodb.com/download-center/compass)