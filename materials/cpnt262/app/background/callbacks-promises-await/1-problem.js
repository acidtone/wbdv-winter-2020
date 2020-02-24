// posts represents blog posts returned from a database server
const posts = [
  {
    title: "Post One",
    postBody: "This is Post One"
  },
  {
    title: "Post Two",
    postBody: "This is Post Two"
  }
];

// post represents form data submitted by a user
const post = {
    title: "Post Three",
    postBody: "This is Post Three"
  };

// getPosts requests a list of posts from a database server and outputs them as a list. In this example, it ouputs to the console but hints are included below on how to output for frontend and backend
function getPosts() {
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post,index){
      output += `${post.title}\n`;
    });

    // console: log as text
    console.log(output);

    // frontend: wrap title in <li>s and assign to document.body.ul.innerHTML
    // document.body.innerHTML = output;

    // backend: output posts as an array of objects and pass to view engine
    // res.render('posts', {posts: output});

  }, 1000);
}

// createPost accepts data from a form (represented by the post object above) and inserts the data into the database (i.e. it's pushed to posts, defined above).
function createPost(post) {
  setTimeout(function(){
    posts.push(post);
  }, 999); 
  // 999 => createPost takes less time than getPosts to receive a response from the database
  // 1001 => createPost takes just a bit longer than getPosts to receive a reaponse from the database. How does this affect the output of getPosts?
}

createPost(post);

getPosts();