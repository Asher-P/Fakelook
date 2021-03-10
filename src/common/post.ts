import User from './user';
class Post {
    user:User;
    image:string;
    hashtags:string
    constructor(user:User,img:string,hashtags:string){
      this.image = img;
      this.user = user;
      this.hashtags = hashtags;
    }
}
export default Post;
