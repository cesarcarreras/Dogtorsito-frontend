import React, {Component} from 'react';
import './calendar.css'

import FullCalendar from '@fullcalendar/react'
import moment from 'moment'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {usersListEndpoint} from '../../services/user-ws'
import { calendarListEndpoint ,calendarCreateEndpoint,calendarDeleteEndpoint } from '../../services/calendar-event-ws';
import ModalCreateAppointment from '../ModalCalendar/ModalCalendar';

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
    let {name, value} = e.target
    if (name === 'start' || name === "end"){
      value = moment(value).add(2,"hours")
    }
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
  if (window.confirm(`Deseas borrar la cita seleccionada? '${clickInfo.event.title}'`)) {
    clickInfo.event.remove()
  }
}

  setAllDay=(e,value)=>{//Declaramos la cita para el dia completo
    e.preventDefault()
    let {appointment} = this.state
    appointment["allDay"] = value
    this.setState({appointment})
  }

  //cambiar el return
          render(){
            const {events} = this.state//Se destructura aqui
                console.log("Listando usuarios",this.state.appointment)
                console.log(this.state.events)
            return (
              <section>
              <h1>Calendario</h1>
              <div className="create-button">
              <ModalCreateAppointment
                buttonLabel="Crear Cita"
              />
              </div>
              <div className="background-calendar">
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
              eventChange={(eventId)=>this.handleChangeEvent(eventId)}
              eventRemove={(eventId)=>this.handleDeleteEvent(eventId)}
              select
              />
              </div>
               </div>
              </div>
              </section>
    )
  }
}

export default Calendar;

