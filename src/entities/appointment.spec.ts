import { expect, test } from 'vitest';
import { Appointment } from './appointment';

test('create an appointment', () => {
  const appointment = new Appointment({
    custumer: 'Jhon Doe',//O famoso "fulano" em inglês
    startsAt: new Date(),
    endAt: new Date()
  });

  //Eu espero que o appointment seja uma instacia de Appointment
  expect(appointment).toBeInstanceOf(Appointment);
  //para validar que ele esteja assinando as propriedades certinha
  expect(appointment.custumer).toEqual('Jhon Doe');



})