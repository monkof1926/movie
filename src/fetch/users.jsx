import React, { useEffect } from "react";
import { useState } from "react";

let [users, setUsers] = useState([]);
let [status, setStatus] = useState("idle");
let userURL = "https://localhos7001/api/user/";

async function GetUsers(){
    try {
        const res = await fetch(userURL);
        const json = await res.json();
        setUsers(json.results);
        setStatus("done");
    }catch(e){
        setStatus("404 can't find user");
    }

}
async function GetUser({username}){
    try {
        const res = await fetch(userURL + "/GetUser");
        const json = await res.json(username);
        setUsers(json.username.results);
        setStatus("done");
    }catch(e){
        setStatus("404 can't find user");
    }
}
async function UpdateUser(username, password){
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
}

async function DeleteUser(username, password){
    try{
        const res = await fetch(userURL);
        const json = await res.json(username, password);
        db.collection('username').findOneAndDelete({username: username}, (err,results) => {
            if (err) return res.send(500, err)
            setStatus('User is delete'+ results);
        });
    }catch(e){
        setStatus("404 can't find user")
    }
}

async function CreateUser(){
    
}


export{GetUsers, GetUser, UpdateUser, DeleteUser, CreateUser};
