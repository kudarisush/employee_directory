import {useMemo, useState} from "react";
import {Employee} from "./EmployeeTable";

export const useFetchEmployeeList = () => {

    const [ employeeList, setEmployeeList ] = useState<Employee[]>([]);
    const [ loading, setLoading] = useState(false);

    useMemo(() => {
        try{
            setLoading(true);
            fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(res=>{
                setEmployeeList(res)
            });
        } catch (e) {
            console.error("Encountered error e while fetching", e);
        }
        setLoading(false);
    }, []);

    return { employeeList, loading };
}