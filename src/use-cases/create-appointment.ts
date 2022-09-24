import { Appointment } from '../entities/appointment';
import { IAppointmentRepository } from '../repositories/contracts/appointment-repository';

//Para criar um novo agendamento, quais dados eu preciso?
interface CreateAppointmentRequest {
  custumer: string;
  startsAt: Date;
  endAt: Date;
}

//Como iremos retornar apenas um Appointment, podemo utilizar um type ao inves de uma interface
type CreateAppointmentReponse = Appointment;

export class CreateAppointment {

  constructor(
    private appointmentsRepository: IAppointmentRepository
  ) {}

  async execute({
    custumer, 
    startsAt, 
    endAt
  }: CreateAppointmentRequest): Promise<CreateAppointmentReponse>{
    

    const overlappingAppointment = await this.appointmentsRepository.findOverlappingAppointment(
        startsAt,
        endAt
      );

      if(overlappingAppointment) {
        throw Error('Another appointment overlaps this appointment dates');
      }

    const appointment = new Appointment({
      custumer,
      startsAt,
      endAt
    });

    await this.appointmentsRepository.create(appointment);

    return appointment;
  }
}