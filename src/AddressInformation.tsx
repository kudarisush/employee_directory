interface Address {
    address: {
        street: string;
        city: string;
        geo : {lat: number; lng: number};
        suite: string;
        zipcode: string;
    }
}
export const AddressInformation = ({ address }: Address)=> {
    return (
        <>
            <td>{address.street}</td>
            <td>{address.city}</td>
            <td>{address.geo.lat} , {address.geo.lng}</td>
            <td>{address.zipcode}</td>
        </>
    )
}