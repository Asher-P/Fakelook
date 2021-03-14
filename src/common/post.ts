import User from './user';
class Post {
    user:User;
    image:string;
    latitude:number;
    longitude:number;
    hashtags:string
    constructor(user:User,img:string,latitude:number,longitude:number,hashtags:string){
      this.image = img;
      this.latitude=latitude;
      this.longitude=longitude;
      this.user = user;
      this.hashtags = hashtags;
    }
}
export default Post;
