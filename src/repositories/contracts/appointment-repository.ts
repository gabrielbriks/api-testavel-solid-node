import { Appointment } from "../../entities/appointment";

export interface IAppointmentRepository {
  create(appointments: Appointment): Promise<void>;
  // save(appointments: Appointment): Promise<void>;
  findOverlappingAppointment(startsAt: Date, endsAt: Date): Promise<Appointment | null>;
}