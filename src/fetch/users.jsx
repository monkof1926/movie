import { useEffect, useState } from "react";

let userURL = "https://localhost:7101/api/user/";

async function GetUsers(){
    let [users, setUsers] = useState([]);
    let [status, setStatus] = useState("idle");

    try {
        const res = await fetch(userURL); 
        const json = await res.json();
        setUsers(json.results);
        setStatus("done");
    }catch(e){
        setStatus("404 can't find user");
    }

    useEffect(() => {
        GetUsers();
    }, [])

    return (
        <div>
            {(status === "done")} 
            {users.map((userObj) => (<li>key = {userObj.username}</li>))
                     .join(",")
            }
            
        </div>
    );
}
async function GetUser({username}){
    let [users, setUsers] = useState([]);
    let [status, setStatus] = useState("idle");

    try {
        const res = await fetch(userURL + "/GetUser");
        const json = await res.json(username);
        setUsers(json.username.results);
        setStatus("done");
    }catch(e){
        setStatus("404 can't find user");
    }
    return (
        <div>
            {(status === "done")} && 
            <p>{users.map(u => u.GetUser)}</p>
        </div>
        );
}
async function UpdateUser(username, password){
    let [users, setUsers] = useState([]);
    let [status, setStatus] = useState("idle");

    try {
        const res = await fetch(userURL);
        const json = await res.json(username, password);
        var currentuser = this.UpdateUser.username && this.UpdateUser.password; 
        var orgUser = json.GetUser('username', 'password');
        var newUser = orgUser = currentuser;
        setUsers(newUser);
        setStatus("done");
    }catch(e){
        setStatus("404 can't find user")
    }
    return(
        <div>
            {(status === "done")} &&
            <p>{users.map(u => u.UpdateUser)}</p>
        </div>
    );
}

async function DeleteUser(username, password){
    let [users, setUsers] = useState([]);
    let [status, setStatus] = useState("idle");
    
    try{
        const res = await fetch(userURL);
        const json = await res.json(username, password);
        userURL.collection('username').findOneAndDelete({username: username}, (e,results) => {
            if (e) return res.send(500, e)
            setUsers(json.username.results);
            setStatus('User is delete'+ results);
            <p>Hallo</p>
        });
    }catch(e){
        setStatus("404 can't find user")
    }
    return(
        <div>
            {(status === "done")} && 
            <p>{users.map(u => u.DeleteUser)}</p>
        </div>
    );
}

async function CreateUser(){
    
}


export default {GetUsers, GetUser, UpdateUser, DeleteUser, CreateUser};
