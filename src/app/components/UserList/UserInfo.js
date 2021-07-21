import {Link} from 'react-router-dom';
import ClientInfo from '../../../clients.json'

const CountryDetails = ({location,history,match}) => (
    <div className="col-7">
        <h1>Client's Database</h1>
        <table className="table">
            <thead></thead>
            <tbody>
            <tr>
                <td style={{width: "30%"}}>{location.state.image}</td>
                <td>{location.state.name}</td>
            </tr>
            <tr>
                <td>email</td>
                <td>{location.state.email} </td>
            </tr>
            <tr>
                <td>Shots</td>
                <td>
                <ul>{
                    location.state.shots.map((shot, index_c)=> {
                    const client = findShot(shot);
                    return (
                        <li key={index_c}>
                            <Link
                                to={{
                                    pathname:"dashboard/details",
                                    state:client
                                }}
                            >
                            </Link>
                        </li>
                    )})}
                </ul>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
)

function findShot(shortName) {
    const index = ClientInfo.findIndex((element, index) => {
        if (element.cca3 === shortName || element.cca2===shortName) {
          return true
        }
    })
    return ClientInfo[index];
}

export default CountryDetails;