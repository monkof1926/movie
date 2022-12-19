import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SearchView = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [url, setUrl] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchDone, setSearchDone] = useState("");
  const [titles, setTitles] = useState([]);
  const [t_consts, setTConsts] = useState([]);
  const [pnames, setPnames] = useState([]);
  const [n_consts, setNConsts] = useState([]);

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
          setSearchDone("Search Done!");
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    } else if (url.endsWith("2")) {
      const fetchDataName = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          const pnames = [];
          const n_consts = [];
          for (let i = 0; i < data.length && pnames.length < 15; i++) {
            pnames.push(data[i].pname);
            n_consts.push(data[i].n_const);
          }
          setPnames(pnames);
          setNConsts(n_consts);
          setSearchDone("Search Done!");
        } catch (error) {
          console.error(error);
        }
      };
      fetchDataName();
    }
  }, [url]);
  

  const handleChangeOption = (event) => {
    
    setSelectedOption(event.target.value);

    //Reset the arrays/const to empty:
    setTitles([]);
    setTConsts([]);
    setPnames([]);
    setNConsts([]);
    setSearchDone("");


    switch (event.target.value) {
      case "option1":
        setUrl("https://localhost:7101/api/searchsimple?query=");
        break;
      case "option2":
        setUrl("https://localhost:7101/api/searchname?query=");
        break;
      case "option3":
        setUrl("https://localhost:7101/api/searchbest?query=");
        break;
      case "option4":
        setUrl("https://localhost:7101/api/searchstructured?query=");
        break;
      default:
        setUrl("https://localhost:7101/api/");
        break;
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setSearchDone("");
    
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
    setUrl(`https://localhost:7101/api/${endpoint}?query=${searchTerm}%20type=${selectedOption.slice(-1)}`);
  };

  return (
    <div>
      <p>SearchViewPage</p>
      <select value={selectedOption} onChange={handleChangeOption}>
        <option value="defualt">Choose Search Type</option>
        <option value="option1">Simple "1 Word"</option>
        <option value="option2">Name "2 Words"</option>
        <option value="option3">Best "4 Words"</option>
        <option value="option4">Structured "4 Words"</option>
      </select>
      <input type="text" value={searchTerm} onChange={handleSearchChange} style={{ width: "400px" }} />
      <button type="button" onClick={handleSearchSubmit}>Search</button>
      <div style={{display: "inline-block", marginLeft: "10px"}}>{searchDone}</div>
      <div>
        {titles.map((title, index) => (
          <div key={index}>
            <Link to={`/Movie/${t_consts[index]}`}>{title}</Link>
          </div>
        ))}
      </div>
      <div>
        {pnames.map((pname, index) => (
          <div key={index}>
            <Link to={`/Person/${n_consts[index]}`}>{pname}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export {SearchView};