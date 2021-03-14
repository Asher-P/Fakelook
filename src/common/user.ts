  class User{
    id: string;
    email: string;
    password: string;
    username: string;
    first_name: string;
    last_name: string;
    picture: string;
    token?: string;
  constructor(first_name:string,last_name:string){
  this.first_name=first_name;
  this.last_name=last_name;
  }
  }
  export default User;