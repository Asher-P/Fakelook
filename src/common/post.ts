import User from './user';
class Post {
    user:User;
    image:string;
    latitude:number;
    longitude:number;
    hashtags:string;
    date:Date;
    constructor(user:User,img:string,latitude:number,longitude:number,hashtags:string){
      this.image = img;
      this.latitude=latitude;
      this.longitude=longitude;
      this.user = user;
      this.hashtags = hashtags;
      this.date = new Date()
    }
}

export default Post;
