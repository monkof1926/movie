import { useState, useEffect } from "react";

// This function fetches the list of users from the API
const fetchUsers = async () => {
  // The URL for the API endpoint that returns the list of users
  const url = "https://localhost:7101/api/user";

  // Fetch the users from the API
  const response = await fetch(url);

  // Parse the JSON response from the API
  const users = await response.json();

  // Return the list of users
  return users;
};

// This function creates a list of users to display
const UserList = () => {
  // Create a state variable to store the list of users
  // Initially, the list is empty
  const [users, setUsers] = useState([]);

  // This function is called when the user clicks the "Get Users" button
  const handleClick = () => {
    // Fetch the list of users from the API
    fetchUsers().then(users => {
      // Update the state with the new list of users
      setUsers(users);
    });
  };

  // Render the list of users
  return (
    <div>
      <button onClick={handleClick}>Get Users</button>
      {users.map(user => (
        <div key={user.username}>
          {/* Extract the username from the URL property */}
          {user.url.split("=")[1]}
        </div>
      ))}
    </div>
  );
};

export { UserList };