class UserModel{
    user_email: string;
    password: string;


    constructor(email: string, password: string) {
        this.user_email = email;
        this.password = password;
    }
}

export default UserModel;