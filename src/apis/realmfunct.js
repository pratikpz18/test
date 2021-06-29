import * as Realm from 'realm-web';
const app = new Realm.App({ id:  "test-avfxt" });

export  const getUser = async () => {
    const credentials = Realm.Credentials.anonymous();
    const user = await app.logIn(credentials);

    const result = await app.currentUser.functions.getallusers()
    console.log (result);
    return (result);

}

export const getUserbyName = async (name) => {
    const res1 = await app.currentUser.functions.getoneuser(name)
    console.log(res1)
    return (res1);
}

export const delUserbyName = async (name) => {
    const res2 = await app.currentUser.functions.deleteuser(name)
    console.log(res2)
    return (res2);
}

export const updateUserbyName = async (name,updatename,mobile,email,active) => {
    const res3 = await app.currentUser.functions.updateuser(name,updatename,mobile,email,active)
    console.log(res3)
    return (res3);
}

export const createUser = async (name,mobile,email,active) => {
    const res4 = await app.currentUser.functions.createuser(name,mobile,email,active)
    console.log(res4)
    return (res4);
}
