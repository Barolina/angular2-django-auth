export class User{
	constructor(
		public username:string,
		public password:string,
		public email:string,
		public gender:string
	){
		this.username = username;
		this.password = password;
		this.email = email;
		this.gender = gender;
	}
}