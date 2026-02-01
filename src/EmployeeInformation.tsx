import { Employee } from "./EmployeeTable";
import {useState} from "react";
import {AddressInformation} from "./AddressInformation";

export const EmployeeInformation = ({ employee }: { employee: Employee }) => {
    const [showAddress, setShowAddress] = useState(false);

    const address = employee?.address;

    return (
        <>
            <tr key={employee?.id}>
                <td>{employee.name}</td>
                <td>{employee.username}</td>
                <td>{employee.phone}</td>
                <td>{employee.address.city}</td>
                <td>{employee.company.name}</td>
                <td><button onClick={() => setShowAddress(!showAddress)}>See address</button></td>
            </tr>

            {showAddress && <tr key={`${employee?.id}-address`}><AddressInformation address={address} /></tr>}
        </>
    )
}