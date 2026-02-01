import {useEffect, useState} from "react";
import {Employee} from "./EmployeeTable";
import {useFetchEmployeeList} from "./useFetchEmployeeList";

interface UseFilteredEmployeeListProps {
    filterValue: string,
    filterBy: string,
}
export const useFilteredEmployeeList = ({ filterValue, filterBy }: UseFilteredEmployeeListProps) => {
    const [ filteredList, setFilteredList ] = useState<Employee[]>([]);
    const { employeeList, loading } = useFetchEmployeeList()

    useEffect(() => {
        if (loading)
            return;
        const addressFilteredList = employeeList?.filter(employee => {
            if(filterBy === "username")
                return employee.username.includes(filterValue);
            else if(filterBy === "email")
                return employee.email.includes(filterValue);
            else if(filterBy === "phone")
                return employee.phone.includes(filterValue);
            else if(filterBy === "city")
                return employee.address.city.includes(filterValue);
            else if(filterBy === "company_name")
                return employee.company.name.includes(filterValue);
            else
                return false;
        });
        setFilteredList(addressFilteredList);
    }, [filterValue, filterBy, setFilteredList, employeeList, loading]);

    const employeesToDisplay = filterValue !== "" ? filteredList : employeeList;

    return { employeesToDisplay, loading }

}