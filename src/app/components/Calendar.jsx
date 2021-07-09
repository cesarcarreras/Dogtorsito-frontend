import React from 'react';

import {Inject, ScheduleComponent,Day,Week,WorkWeek,Month,Agenda} from '@syncfusion/ej2-react-schedule'; //EventSettings, es para crear citas.

class Calendar extends React.Component {
  render(){
    return <ScheduleComponent currentView="Month">
      <Inject services={[Day,Week,WorkWeek,Month,Agenda]} />
    </ScheduleComponent>
  }
}

export default Calendar;