import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SearchView = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [url, setUrl] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [titles, setTitles] = useState([]);
  const [t_consts, setTConsts] = useState([]);



  useEffect(() => {
    console.log(url);
    if (url.endsWith("1") || url.endsWith("3") || url.endsWith("4")) {
        const fetchData = async () => {
            try {
              const response = await fetch(url);
              const data = await response.json();
              const titles = [];
              const t_consts = [];
              for (let i = 0; i < data.length && titles.length < 15; i++) {
                titles.push(data[i].title);
                t_consts.push(data[i].t_const);
              }
              setTitles(titles);  
              setTConsts(t_consts); 
            } catch (error) {
              console.error(error);
            }
          };
        fetchData();
      }
    
  }, [url]);

  const handleChangeOption = (event) => {
    setSelectedOption(event.target.value);
    switch (event.target.value) {
      case "option1":
        setUrl("https://localhost:5001/api/searchsimple?query=");
        break;
      case "option2":
        setUrl("https://localhost:5001/api/searchname?query=");
        break;
      case "option3":
        setUrl("https://localhost:5001/api/searchbest?query=");
        break;
      case "option4":
        setUrl("https://localhost:5001/api/searchstructured?query=");
        break;
      default:
        setUrl("https://localhost:5001/api/");
        break;
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    
  };
    const handleSearchSubmit = () => {
    console.log(`Searching for: ${searchTerm}`);
    let endpoint = "";
    switch (selectedOption) {
      case "option1":
        endpoint = "searchsimple";
        break;
      case "option2":
        endpoint = "searchname";
        break;
      case "option3":
        endpoint = "searchbest";
        break;
      case "option4":
        endpoint = "searchstructured";
        break;
      default:
        endpoint = "";
        break;
    }
    setUrl(`https://localhost:5001/api/${endpoint}?query=${searchTerm}%20type=${selectedOption.slice(-1)}`);
  };

  return (
    <div>
      <p>SearchViewPage</p>
      <select value={selectedOption} onChange={handleChangeOption}>
        <option value="defualt">Choose Search Type</option>
        <option value="option1">Simple</option>
        <option value="option2">Name</option>
        <option value="option3">Best</option>
        <option value="option4">Structured</option>
      </select>
      <input type="text" value={searchTerm} onChange={handleSearchChange} style={{ width: "400px" }} />
      <button type="button" onClick={handleSearchSubmit}>Search</button>
      <div>
        {titles.map((title, index) => (
          <div key={index}>
            <Link to={`/Movie/${t_consts[index]}`}>{title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export {SearchView};