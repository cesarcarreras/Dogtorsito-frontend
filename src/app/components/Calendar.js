import React, {Component} from 'react';

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction"
import { calendarListEndpoint } from '../services/calendar-event-ws';

class Calendar extends Component {
  state = {
    event:[{
      Id:1,
      Description: "Cirugia ocular",
      EndTime: null,
      IsAllDay: true,
      StartTime: "2021-07-13T00:00:00.000Z",
      Subject: "Cirugia"
    }]
  }
  componentDidMount(){
    calendarListEndpoint()
    .then(res=>{
      console.log("holahola",res)
      //this.setState({event:res.data.result})
    })
    .catch(error=>{
      console.log(error)
    })
  }
  //cambiar el return
  render(){
    return (
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        dateClick={this.handleDateClick}
      />
    )
  }
  handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
  }
}

export default Calendar;