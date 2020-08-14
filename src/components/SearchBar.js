import React from 'react'

export default function SearchBar(props) {
    return (
        <form>
            <div className="form-group">
                <input
                style={{width:'200px'}}
                onChange={props.handleInputChange}
                value={props.value}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search For an Employee"
                id="search"
                />
                <br />
                <button onClick={props.handleFormSubmit} className="btn btn-primary">
                Refresh List
                </button>
                <br/>
                <br/>
                <button 
                name="male"
                onClick={(e) => {
                    e.preventDefault();
                    props.genderFilter("male")
                } }>
                    Male
                </button>
                <button 
                name="female"
                onClick={(e) => {
                    e.preventDefault();
                    props.genderFilter("female")
                    }}>
                    Female
                </button>
            </div>
        </form>
    )
}
