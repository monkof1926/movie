import React, { useEffect } from "react";
import Navgationbar from "../object/navBar.jsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

const searchShow =() => {
    useEffect(() => {
        // Code to run when the component is rendered or updated
      });
      

}

function searchList(props){
    const searchResults = props.searchResults
    const searchListObjects = searchResults.map((search) =>
    <li>
        {"searchtconst"}
        <a href="Link til wherever">{"searchtitle"}</a>
        {"searchrank"}
    </li>

    
    );
      
      return(
            <ul>
                {searchListObjects}
            </ul>
    );
}