import User from './user'
class SendPost{
    user:User;
    image:File;
    latitude:number;
    longitude:number;
    hashtags:string
    constructor(user:User,img:File,latitude:number,longitude:number,hashtags:string){
      this.image = img;
      this.latitude=latitude;
      this.longitude=longitude;
      this.user = user;
      this.hashtags = hashtags;
    }
  }
  export default SendPost