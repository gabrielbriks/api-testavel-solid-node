import { describe, expect, it } from 'vitest';
import { Appointment } from '../entities/appointment';
import { InMemoryAppointmentsRepository } from '../repositories/in-memory-appointments-repository';
import { getFutureDate } from '../tests/utils/get-future-date';
import { CreateAppointment } from './create-appointment';

//O describe serve para fazer uma categorização dos testes;
//Pois dentro eu posso criar vários testes sobre criar um agendamento;
describe('Create Appointment', () => {
  it('should be able to create a new Appointment', () => {

    const appointmentsRepository = new InMemoryAppointmentsRepository();

    const createAppointment = new CreateAppointment(appointmentsRepository);

    const startsAt = getFutureDate('2022-09-24');
    const endAt = getFutureDate('2022-09-25');

    //Espero que a promise resolva e que o retorno dessa promise seja um Appointment
    expect(createAppointment.execute({
      custumer: 'Jhon Doe',
      startsAt,
      endAt
    })).resolves.toBeInstanceOf(Appointment);
    
  });


  it('should be able to create an Appointment with overlapping dates', async () => {

    const appointmentsRepository = new InMemoryAppointmentsRepository();
    const createAppointment = new CreateAppointment(appointmentsRepository);

    const startsAt = getFutureDate('2022-09-24');
    const endAt = getFutureDate('2022-09-28');

    await createAppointment.execute({
      custumer: 'Jhon Doe',
      startsAt,
      endAt
    });

    //Com datas conflitantes entre as datas do registro anterior
    expect(createAppointment.execute({
      custumer: 'Jhon Doe',
      startsAt: getFutureDate('2022-09-27'),
      endAt: getFutureDate('2022-09-30')
    })).rejects.toBeInstanceOf(Error);


    //Com datas conflitantes entre as datas do registro anterior
    expect(createAppointment.execute({
      custumer: 'Jhon Doe',
      startsAt: getFutureDate('2022-09-30'),
      endAt: getFutureDate('2022-10-2')
    })).rejects.toBeInstanceOf(Error);
    
  });
  
  
});