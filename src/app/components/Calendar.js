import React, {Component} from 'react';


import {Inject, ScheduleComponent,Day,Week,WorkWeek,Month,Agenda} from '@syncfusion/ej2-react-schedule'; //EventSettings, es para crear citas.

class Calendar extends Component {
  render(){
    return <div className="calendar"><ScheduleComponent  currentView="Month">
      <Inject services={[Day,Week,WorkWeek,Month,Agenda]} />
    </ScheduleComponent></div>
  }
}

export default Calendar;