import React from 'react';

export default function EmployeeRow(props) {
    return (
        <tr>
            <th scope="row"><img alt={props.name} src={props.picture} /></th>
            <td>{props.name}</td>
            <td>{props.cell}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td> 
        </tr>
    )
}