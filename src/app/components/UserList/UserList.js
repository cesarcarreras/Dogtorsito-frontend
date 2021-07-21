import {Link} from 'react-router-dom'
import './users.css'

const ClientList = ({clients = [0,1,2,3]}) => (
		<section>
			<div class="ps">
			{clients.map((client, index_c) => (
						<ul key={index_c}>
							<div class="card-users">
								<div class="circle-photo-card">
								</div>
									<div class="paragarph-center">
										<h1 class="title-card">{client.petName}</h1>
										<p class="positon">{client.name}</p>
										<h5>{client.breed}</h5>
										<Link to={{ pathname:"clients/details", state:client}}>
										<button type="button" class="btn btn-primary">More</button>
										</Link>
										<button type="button" class="btn btn-danger">Delete</button>
									</div>
							  </div>
							</ul>
						)
					)
				}
			</div>
		</section>
)

export default ClientList;