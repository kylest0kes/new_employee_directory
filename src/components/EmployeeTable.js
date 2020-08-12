import React from 'react'
import EmployeeRow from './EmployeeRow';

export default function EmployeeTable(props) {
    return (
        <div>
            <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">
                        Name
                    </th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
                </thead>
                <tbody> 
                    {props.employees.map(result => (
                        <EmployeeRow 
                        key={result.id.value}
                        picture={result.picture.thumbnail}
                        name={`${result.name.first} ${result.name.last}`}
                        cell={result.cell}
                        email={result.email}
                        dob={result.dob.date}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
