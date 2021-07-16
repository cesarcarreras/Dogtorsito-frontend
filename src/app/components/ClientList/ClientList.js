import {Link} from 'react-router-dom'
import './client.css'

const ClientList = ({clients = [0,1,2,3]}) => (
    <div classNameName="clients-page">
    <div className="container">
<div className="row">
	<div className="col-lg-12">
		<div className="main-box clearfix">
			<div className="table-responsive">
				<table className="table user-list">
					<tbody>
                    {clients.map((client, index_c) => (
                                <tr key={index_c}>
                                    <Link to={{ pathname:"/details", state:client}}/>
							<td>
								<img src={client.image} alt="" width="80px"/>
								<a href="#" className="user-link">{client.name}</a>
								<span className="user-subhead">{client.pet}</span>
							</td>
							<td>
								{client.signup}
							</td>
							<td className="text-center">
								<span className="label label-default">{client.status}</span>
							</td>
							<td>
								<a href="#">{client.email}</a>
							</td>
							<td>
								<a href="#" className="table-link">
								<Link to={{ pathname:"dashboard/details", state:client}}>
								<button type="button" class="btn btn-secondary">More</button>
								</Link>
								</a>
								<a href="#" className="table-link">
									<span className="fa-stack">
									<button type="button" class="btn btn-primary">Edit</button>
									</span>
								</a>
								<a href="#" className="table-link danger">
									<span className="fa-stack">
									<button type="button" class="btn btn-danger">Delete</button>
									</span>
								</a>
							</td>
						</tr>
                        )
                      )
                  }
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

</div>

</div>

)

export default ClientList;