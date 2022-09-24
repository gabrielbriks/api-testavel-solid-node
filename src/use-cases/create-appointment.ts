import { Appointment } from '../entities/appointment';

//Para criar um novo agendamento, quais dados eu preciso?
interface CreateAppointmentRequest {
  custumer: string;
  startsAt: Date;
  endAt: Date;
}

//Como iremos retornar apenas um Appointment, podemo utilizar um type ao inves de uma interface
type CreateAppointmentReponse = Appointment;

export class CreateAppointment {

  async execute({
    custumer, 
    startsAt, 
    endAt
  }: CreateAppointmentRequest): Promise<CreateAppointmentReponse>{
    
    const appointment = new Appointment({
      custumer,
      startsAt,
      endAt
    });

    return appointment;
  }
}