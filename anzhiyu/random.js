var posts=["2025/06/03/backend-gin/","2025/06/02/WebBlog/","2025/06/02/backend-go/","2025/03/15/hello-world/","2025/06/03/backend-gorm/","2025/06/03/go-redis/","2025/06/03/viper/","2025/06/28/go-tags/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };