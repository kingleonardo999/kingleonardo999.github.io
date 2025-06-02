var posts=["2025/03/15/hello-world/","2025/06/02/backend-go/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };