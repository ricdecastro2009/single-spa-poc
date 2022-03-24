
export function Test(){
    console.log("TESTE lib")
}


class User{
    private static instance: User;
    
    public nome = '';
    public perfil = '';

    public getInstance(): User {
        alert("Opa")
        if (!User.instance) {
            User.instance = new User();
        } 

        return User.instance;
    }

    
 }

 export default User
