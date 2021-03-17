import User from './user'
class SendPost{
    user:User;
    image:File;
    latitude:number;
    longitude:number;
    hashtags:string;
    userTags:string;
    date:Date;
    constructor(user:User,img:File,latitude:number,longitude:number,hashtags:string,userTags:string){
      this.image = img;
      this.latitude=latitude;
      this.longitude=longitude;
      this.user = user;
      this.hashtags = hashtags;
      this.userTags = userTags;
      this.date= new Date();
    }

  }
  export default SendPost