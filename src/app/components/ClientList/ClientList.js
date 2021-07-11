import {Link} from 'react-router-dom'

const ClientList = ({clients = [0,1,2,3]}) => (
    <ul>
     {
         clients.map((client, index_c) => (
             <li key={index_c} className="list-group-item">
                <Link
                    to={{
                        pathname:"/details",
                        state:client
                    }}
                >
                   {client.name}
                   {client.email}
                </Link>
             </li>
         )
       )
     }

    </ul>
)

export default ClientList;