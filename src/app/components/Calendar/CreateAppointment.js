import React,{Component} from 'react'
import { ButtonGroup, Input } from 'reactstrap'
import Button from '../Button/Button'
import TextInput from '../TexInput/TextInput'
import moment from 'moment'
import {usersListEndpoint} from '../../services/user-ws'
import { calendarListEndpoint ,calendarCreateEndpoint,calendarDeleteEndpoint } from '../../services/calendar-event-ws';
import './calendar.css'
import {withRouter} from 'react-router-dom';


class CreateAppointment extends Component{
  state = {
    events:[],
    appointment:{allDay:false},
    listUser:[]
  };

  componentDidMount(){//primero va el componentDidMount
    calendarListEndpoint()
    .then(res=>{
      this.setState({events:res.data.result})
    })
    .catch(error=>{
      console.log(error)
    })

    usersListEndpoint()
    .then(res=>{
      this.setState({listUser:res.data.result})
    })
    .catch(error=>{
      console.log(error)
    })
  }


  handleChange=(e)=>{
    //Destructuramos
    let {appointment} = this.state
    let {name, value} = e.target
    if (name === 'start' || name === "end"){
      value = moment(value).add(2,"hours")
    }
    appointment[name]= value
    this.setState({ appointment })
}

handleSubmit=(e)=>{
  //Destructuramos
  const {history} = this.props
  let {appointment,events} = this.state

  e.preventDefault()
  calendarCreateEndpoint(appointment)
  .then(res=>{
    events=[...events,res.data.result]
    this.setState({events})//modificamos el state con los eventos
    history.push('/dashboard/datecreated')
})
.catch(error =>{
    console.log("error",error)
})
}

handleDeleteEvent=(clickInfo)=>{//funcion tomada del repo
console.log("borrando la base",clickInfo.event.extendedProps._id)
let deleteEvent = clickInfo.event.extendedProps._id//Esta ruta identifica el id del evento
calendarDeleteEndpoint(deleteEvent)
.then(res=>{
console.log(res)
})
.catch(error =>{

})
}

handleEventClick = (clickInfo) => {
  /*if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    clickInfo.event.remove()
  }*/
  //to do: abrir modal, preguntar para borrar, y confirmar ejecuta clickInfo.event.remove()
  console.log(clickInfo.event.extendedProps._id)
  clickInfo.event.remove()
}

  setAllDay=(e,value)=>{//Declaramos la cita para el dia completo
    e.preventDefault()
    let {appointment} = this.state
    appointment["allDay"] = value
    this.setState({appointment})
  }

    render(){
        const {appointment,listUser} = this.state//Se destructura aqui
        const {handleChange,handleSubmit,setAllDay} = this
        return(
         <section>
            <div className="cal-container">
              <div className="createApp form-container sign-in-container">
                  <form onSubmit={handleSubmit}>
                      <h2 className="h1-form-cal">Registrar Cita</h2>
                      <div className="container-fields input-sm">
                          <Input
                          type="select" name="_patient" id="exampleSelect"
                          onChange={handleChange}>
                            <option value={0}>Seleciona un cliente</option>
                            {/* Tengo que validar si el_appointment = 0 , evitar que se cree el evento*/ }
                            {listUser.map((user, index_c) => (
                            <option value={user._id} key={index_c}>
                                  {user.name}
                                  </option>))}
                            </Input>
                                  <TextInput
                                    name='name'
                                    placeholder='Nombre de la Mascota'
                                    handleChange={handleChange}
                                  />
                                 <TextInput
                                    name='title'
                                    placeholder='Titulo de la cita'
                                    handleChange={handleChange}
                              />
                              <p>
                                ¿Es para todo el dia?
                              </p>
                             <ButtonGroup>
                                  <Button text={'Si'} type={appointment.allDay ? "primary" : "danger"} onPress={(e) => setAllDay(e,true)} />
                                  <Button text={'No'} type={!appointment.allDay ? "primary" : "danger"} onPress={(e) => setAllDay(e,false)} />
                            </ButtonGroup>

                                      <TextInput
                                      textLabel="Fecha de inicio"
                                      name='start'
                                      type='date'
                                      placeholder='Start time yyyy-mm-dd'
                                      handleChange={handleChange}
                                      />
                                      <TextInput
                                      textLabel="Fecha de fin"
                                      name='end'
                                      type='date'
                                      placeholder='Finish time yyyy-mm-dd'
                                      handleChange={handleChange}
                                      disabled={appointment.allDay ? true : false}
                                      />

                           </div>
                           
                              <Button text={'Crear Cita'}/>
                              
                  </form>
              </div>
          </div>
          </section>
        )
    }
}

export default withRouter(CreateAppointment);//withRouter funciona para poder redirigir el boton.