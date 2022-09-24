interface AppointmentProps {
  custumer: string;//representa o cliente(pode ser um id)
  startsAt: Date;
  endAt: Date;
}

export class Appointment {
  private props: AppointmentProps;
  
  //Define get's e set's

  get custumer(){
    return this.props.custumer;
  }

  get startsAt(){
    return this.props.startsAt;
  }
  
  get endAt(){
    return this.props.endAt;
  }
  
  
  constructor(props: AppointmentProps) {
    this.props = props;
  }

}