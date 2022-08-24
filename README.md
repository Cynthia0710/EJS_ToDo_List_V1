# EJS_ToDo_List

## ToDo_List_V1
### Content
This is a website to realize a to-do list for daily life and work list.

### Excute
1. `node app.js`
2. http://localhost:3000/

## ToDo_List_V2
### Update
Store data to MongoDB, and use Mongoose.

### MongoDB
1. MongoDB Shell : `mongosh`
2. Basic Operation
* Show Database : `show dbs`
* Set Current Database : `use [dbname]`
* Show Collection : `show collection`
* Create/Insert Document(s) in Collection : `db.[collectionname].insertOne({<field>:<value>})` or `db.[collectionname].insertMany([{<field>:<value>}, {<field>:<value>}])`
* Read/Find All Documents in Collection : `db.[collectionname].find({<field>:<value>})`
* Update Document(s) in Collection : `db.[collectionname].updateOne(<filter>,<update>)` or `db.[collectionname].updateMany(<filter>,<update>}`
* Delete Document(s) in Collection : `db.[collectionname].deleteOne({<field>:<value>})` or `db.[collectionname].deleteMany({<field>:<value>})`

### Heroku
* https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment
1. Track your codebase in a Git repository
* `git clone <ssh>`
* `git add .`
* `git commit -m <comments>`
2. Login heroku
* `heroku login`
3. Add a Heroku Git remote
* `heroku create`
4. Add a Procfile
* `vim Procfile`
* write `web: node app.js` in Procfile
5. Listen on the correct port
* write the following code in app.js:
```
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
```
6. Use a database or object storage instead of writing to your local filesystem
7. Complete language-specific setup
* https://devcenter.heroku.com/articles/deploying-nodejs
* Specify the version of node
    * in package.json add the following code:
      ```
      "engines": {
          "node": "14.x"
      },
      ```
* How to keep build artifacts out of git
    * `vim .gitignore`
    * write the following code to this file:
        ```
        /node_modules
        npm-debug.log
        .DS_Store
        /*.env
        ```
8. Deploy your application to Heroku
* `git add .`
* `git commit -m <comments>`
* `git push heroku main`




