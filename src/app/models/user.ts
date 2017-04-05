export class User{
	constructor(
		public username:string,
		public password:string,
		public email:string
	){
		this.username = username;
		this.password = password;
		this.email = email;
	}

	public toPostJsonStr(csrftoken:string){
		return JSON.stringify({
			'csrf_token': csrftoken,
			'username': this.username, 
			'password': this.password, 
			'email':this.email});
	}
}