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

    const {startsAt, endAt} = props;

    if(startsAt <= new Date()){
      throw Error('Invalid startsAt value.');
    }

    if(endAt <= startsAt){
      throw Error('Invalid endAt value.');
    }



    this.props = props;
  }

}