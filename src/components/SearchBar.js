import React from 'react'

export default function SearchBar(props) {
    return (
        <form>
            <div className="form-group">
                <input
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
                Search
                </button>
                <br/>
                <br/>
                <button>
                    Male
                </button>
                <button>
                    Female
                </button>
            </div>
        </form>
    )
}
