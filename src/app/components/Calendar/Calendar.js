import React, {Component} from 'react';
import './calendar.css'

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction"
import { calendarListEndpoint } from '../../services/calendar-event-ws';
import { TextInput,Button } from '../../components';
import { ButtonGroup,Label,Input } from 'reactstrap';
import {usersListEndpoint} from '../../services/user-ws'

class Calendar extends Component {
  state = {
    events:[],
    appointment:{allDay:false},
    listUser:[]
  };

  handleChange=(e)=>{
    //Destructuramos
    let {appointment} = this.state
    const {name, value} = e.target
    appointment[name]= value
    this.setState({ appointment })
}

  componentDidMount(){
    calendarListEndpoint()
    .then(res=>{
      console.log("holahola",res)
      this.setState({events:res.data.result})
    })
    .catch(error=>{
      console.log(error)
    })

    usersListEndpoint()
    .then(res=>{
      console.log("hola2",res)
      this.setState({listUser:res.data.result})
    })
    .catch(error=>{
      console.log(error)
    })
  }

  setAllDay=(e,value)=>{
    e.preventDefault()
    let {appointment} = this.state
    appointment["allDay"] = value
    this.setState({appointment})
  }

  //cambiar el return
  render(){
    const {events,appointment,listUser} = this.state//Se destructura aqui
        const {handleChange,handleSubmit,setAllDay} = this
        const {match} = this.props
        console.log("Listando usuarios",this.state.appointment)
        //
    return (

      <div className="background">
       <div className="title"> <h1>Appointments</h1></div>
      <div className='calendar'>
      <FullCalendar
      events={events}
        plugins={[ dayGridPlugin, interactionPlugin ]}
        //dateClick={this.handleDateClick}
      />
      </div>

      <div className="container" id="container">
        <div className="form-container sign-up-container body-form">
        </div>
        <div className="form-container sign-in-container">
            <form onSubmit={handleSubmit}>
                <h1 className="h1-form">Register appointment</h1>
                <div className="container-fields">
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
                       <ButtonGroup>
                            <Button text={'Yes'} type={appointment.allDay ? "danger" : "primary" }onPress={(e) => setAllDay(e,true)} />
                            <Button text={'No'} type={!appointment.allDay ? "danger" : "primary"} onPress={(e) => setAllDay(e,false)} />
                            
                      </ButtonGroup>

                            <TextInput
                            name='start'
                            type='date'
                            placeholder='Start time yyyy-mm-dd'
                            handleChange={handleChange}
                        />

                                <TextInput
                                name='end'
                                type='date'
                                placeholder='Finish time yyyy-mm-dd'
                                handleChange={handleChange}
                            />

                     </div>
                        <Button text={'Create appointment'}/>
            </form>

                
        </div>
        
    </div>
      </div>
      
    )
  }
  
}

export default Calendar;