export function checklogin (){
    const loggedInUser = localStorage.getItem("Name");
    if (loggedInUser) {
        return true;
    }
    return false;
}
export function getUID (){
    const UID = localStorage.getItem("UID");

    return UID;
}
