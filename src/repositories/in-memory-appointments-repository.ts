import { areIntervalsOverlapping } from "date-fns";
import { Appointment } from "../entities/appointment";
import { IAppointmentRepository } from "./contracts/appointment-repository";


//Essa classe vai funcionar como um banco de dados em memória para conseguir realizar os testes necessários
export class InMemoryAppointmentsRepository implements IAppointmentRepository {
  public itemsAppointments: Appointment[] = [];
  
  async create(appointments: Appointment): Promise<void> {
      this.itemsAppointments.push(appointments)
  }

  async findOverlappingAppointment(startsAt: Date, endsAt: Date): Promise<Appointment | null> {
      const overlappingAppointment = this.itemsAppointments.find(appointments => {
        return areIntervalsOverlapping(
          {start: startsAt, end: endsAt},
          {start: appointments.startsAt, end: appointments.endAt},
          {inclusive: true}
          );
      });

      //Se for FALSE, não existirá conflitos
      if(!overlappingAppointment)
        return null;

      return overlappingAppointment;

  }
}