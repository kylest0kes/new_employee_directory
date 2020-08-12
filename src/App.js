import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import EmployeeTable from "./components/EmployeeTable";
import API from './utils/API';
import './App.css';



export default class App extends Component {

  state = {
    employees: [],
    filteredEmployees: [],
    search: "",
  };

  componentDidMount() {
      this.searchEmployees()
  }

  searchEmployees = query => {
      API.search(query)
          .then(res => {
            console.log(res)
              for(let i = 0; i < res.data.results.length; i++){
                  let dob = new Date(res.data.results[i].dob.date)
                  res.data.results[i].dob.date = `${dob.getMonth()+1}/${dob.getDate()}/${dob.getFullYear()}`
              }
              this.setState({ employees: res.data.results, filteredEmployees: res.data.results })
              
          })
          .catch(err => console.log(err));
  }

  filteredSearch = (searchName) => {
    const filtered = this.state.employees.filter((employee) => {
      return (employee.name.first.startsWith(searchName) || employee.name.last.startsWith(searchName))
    });
    this.setState({
      filteredEmployees: filtered
    })
  }

  handleInputChange = event => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
        [name]: value
      }, () => {
        this.filteredSearch(this.state.search)
      });
  };

  handleFormSubmit = event => {
  event.preventDefault();
  this.searchEmployees(this.state.search);
  };

  genderFilter = (gender) => {
    const filtered = this.state.employees.filter((employee) => {
      return (employee.gender === gender)
    });
    this.setState({
      filteredEmployees: filtered
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar 
        handleInputChange={this.handleInputChange}
        genderFilter={this.genderFilter}
        />
        <EmployeeTable 
          employees={this.state.filteredEmployees}
        />
      </div>
    )
  }
}

