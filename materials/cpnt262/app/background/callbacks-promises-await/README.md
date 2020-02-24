# A history of asynchronous javascript
ref: https://www.youtube.com/watch?v=PoRJizFvM7s

## The Problem
Asynchronous operations makes it difficult to complete those operations in a specific order. The code in problem.js (in this directory) illustrates how this can happen in a blog.

### Use case: a user writes a new post for their blog
Once the user submits the New Post form, the server is supposed to:
1. Add the new post to the database (in this example, the post is pushed to an array)
2. Once the post is added, the updated list of posts is outputted to the browser (in this example, the list is logged to the console)

### Activity
- navigate to problem.js in this directory and run in node from the command line
- change the SetTimeout delay on createPost from 999 milliseconds to 1001 milliseconds, which mimics a delayed response from the database server
- notice the correct output depends on the order that the operations is carried out: if createPosts executes after getPosts, the new post is not included in the output

## Solution 1: Callbacks

## Solution 2: Promises

## Solution 3: Awaits