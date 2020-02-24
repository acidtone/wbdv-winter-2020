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
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      posts.push(post);
      console.log('Post created...')

      error = false;

      if(!error) {
        resolve();
      } else {
        reject('Error: backup slowly... make no eye contact');
      }
    }, 999); 
  });
}

// Insead of .then and .catch, we create an async function and use the await keyword to wait for createPost to finish before getting the Posts
async function init() {
  await createPost(post);
  getPosts();
}

init();