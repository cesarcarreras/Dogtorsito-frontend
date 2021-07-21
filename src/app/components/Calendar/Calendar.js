import React, {Component} from 'react';
import './calendar.css'

import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { TextInput,Button } from '../../components';
import { ButtonGroup,Label,Input } from 'reactstrap';
import {usersListEndpoint} from '../../services/user-ws'
import { calendarListEndpoint ,calendarCreateEndpoint,calendarUpdateEndpoint,calendarDeleteEndpoint } from '../../services/calendar-event-ws';

class Calendar extends Component {
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
    const {name, value} = e.target
    appointment[name]= value
    this.setState({ appointment })
}

handleSubmit=(e)=>{
  //Destructuramos
  
  let {appointment,events} = this.state
  
  e.preventDefault()
  calendarCreateEndpoint(appointment)
  
  .then(res=>{
    events=[...events,res.data.result]
    this.setState({events})//modificamos el state con los eventos

})
.catch(error =>{
    console.log("error",error.response)
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

  
  /*handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: calendarCreateEndpoint(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }*/

  //cambiar el return
  render(){
    const {events,appointment,listUser} = this.state//Se destructura aqui
        const {handleChange,handleSubmit,setAllDay} = this
        const {match} = this.props
        console.log("Listando usuarios",this.state.appointment)
        console.log(this.state.events)
    return (

      <div className="background">
       <div className="title"> <h1>Appointments</h1></div>
       <div className="calendarForm">
      <div className="calendar">
      <FullCalendar 
      events={events}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }}
      initialView='dayGridMonth'
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      weekends={this.state.weekendsVisible}
      initialEvents={events} // alternatively, use the `events` setting to fetch from a feed
      //select={this.handleDateSelect}
      //eventContent={renderEventContent} // custom render function
      eventClick={this.handleEventClick}
      //eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
      eventChange={function(){}}
      eventRemove={(eventId)=>this.handleDeleteEvent(eventId)}

      select
      />
      </div>
      <section className="auth-container">
      <div className="container " id="container">
        
        <div className="createApp form-container sign-in-container">
            <form onSubmit={handleSubmit}>
                <h2 className="h1-form">Register appointment</h2>
                <div className="container-fields input-sm ">
                <Label for="exampleSelect">Select client</Label>
                    <Input 
                    type="select" name="_patient" id="exampleSelect" 
                    onChange={handleChange}>
                      <option value={0}>Pick a client</option> 
                      {/* Tengo que validar si el_appointment = 0 , evitar que se cree el evento*/ }
                      {listUser.map((user, index_c) => (
                      <option value={user._id} key={index_c}>
                            {user.name}
                            </option>))}  
                      </Input>
                
                                <TextInput
                                name='name'
                                placeholder='Name'
                                handleChange={handleChange}
                            />
                           <TextInput
                            name='title'
                            placeholder='Appointment title'
                            handleChange={handleChange}
                        />
                        <p>
                          All day appointment
                        </p>
                       <ButtonGroup>
                            
                            <Button text={'Yes'} type={appointment.allDay ? "danger" : "primary"} onPress={(e) => setAllDay(e,true)} />
                            <Button text={'No'} type={!appointment.allDay ? "danger" : "primary"} onPress={(e) => setAllDay(e,false)} />
                            
                      </ButtonGroup>

                            <TextInput
                            textLabel="Start Date"
                            name='start'
                            type='date'
                            placeholder='Start time yyyy-mm-dd'
                            handleChange={handleChange}
                        />
                                <TextInput
                                textLabel="Finish Date"
                                name='end'
                                type='date'
                                placeholder='Finish time yyyy-mm-dd'
                                handleChange={handleChange}
                                disabled={appointment.allDay ? true : false}
                                //Colocamos condicion para deshabilitar la fecha final si la cita es de todo el dia 
                                
                            />

                     </div>
                        <Button text={'Create appointment'}/>
            </form>

                
        </div>
        
    </div>
    </section>
    </div>
      </div>
      
    )
  }
  

  

  
}



export default Calendar;