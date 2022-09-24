import { describe, expect, it } from 'vitest';
import { Appointment } from '../entities/appointment';
import { CreateAppointment } from './create-appointment';

//O describe serve para fazer uma categorização dos testes;
//Pois dentro eu posso criar vários testes sobre criar um agendamento;
describe('Create Appointment', () => {
  it('should be able to create a new Appointment', () => {

    const createAppointment = new CreateAppointment();

    const startsAt = new Date();
    const endAt = new Date();

    endAt.setDate(endAt.getDate() + 1);

    //Espero que a promise resolva e que o retorno dessa promise seja um Appointment
    expect(createAppointment.execute({
      custumer: 'Jhon Doe',
      startsAt,
      endAt
    })).resolves.toBeInstanceOf(Appointment);
    
  });
  
});