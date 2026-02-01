import { useState} from "react";
import { EmployeeInformation } from "./EmployeeInformation";
import { useFilteredEmployeeList } from "./useFilteredEmployeeList";

export interface Employee {
    id: number;
    name: string;
    username: string;
    website: string;
    email: string;
    phone: string;
    address: {
        street: string;
        city: string;
        geo : {lat: number; lng: number};
        suite: string;
        zipcode: string;
    }
    company: {
        name: string;
        bs: string;
        catchPhrase: string;
    }
}

export const EmployeeTable = ( )=> {
    const [ filterBy, setFilterBy] = useState("username");
    const [ filterValue, setFilterValue ] = useState("");

    const { employeesToDisplay, loading } = useFilteredEmployeeList({ filterValue: filterValue, filterBy: filterBy });

    if (loading)
        return <div>Loading...</div>;

    return (
        <>
            <select name="Filter Employees" onChange={(e) => setFilterBy(e.target.value)} defaultValue="username">
                <option value="username">Username</option>
                <option value="phone">Phone number</option>
                <option value="city">City</option>
                <option value="company_name">Company</option>

            </select>
            <input
                type="text"
                placeholder="Filter Employess by city:"
                value={filterValue}
                onChange={(e) =>  setFilterValue(e.target.value)}
            />
            <h1>Employee Directory</h1>
            <table>
                <thead>
                    <tr id={"header"}>
                        <td>Name</td>
                        <td>Username</td>
                        <td>Phone number</td>
                        <td>City</td>
                        <td>Company</td>
                    </tr>
                </thead>
                {!!employeesToDisplay && employeesToDisplay.map((employee : Employee) => (
                    <tbody key={employee?.id.toString()}><EmployeeInformation employee={employee} /></tbody>
                ))}
            </table>
        </>
    )
}