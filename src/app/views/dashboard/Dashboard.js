import React, {Component} from 'react';
import { SideBar} from '../../components'
import SubRoutes from '../../../SubRoutes';
import { logoutEndpoint } from  '../../services/auth-ws'
 class Dashboard extends Component{

    state={
        //JSON.parse(Para regresar a ser objeto)
        // valor || valor1 si no se cumple uno se muestra otro valor
        user: JSON.parse(localStorage.getItem("user")) || {},
    }

    componentDidMount(){
        const {user} = this.state
        const {history} = this.props
        if(!Object.keys(user).length || user === undefined){
            history.push('/login')
        }
    }

    onClickMenu = () => {}

    onLogout=()=>{
        const {history} = this.props
        logoutEndpoint()
        .then(res=>{
            localStorage.removeItem('user')
            history.push('/')
        })
        .catch(error=>{
            console.log("console error",error)
        })
    }

    render(){
       const {user} = this.state
       const {onLogout} = this
        return(
         <section>
            <div className="dashboard">
                <SideBar
                    user={user}
                    onLogout={onLogout}
                />
                 <SubRoutes/>
            </div>
        </section>
        )
    }
}


export default Dashboard