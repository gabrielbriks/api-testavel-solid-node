import { expect, test } from 'vitest';
import { Appointment } from './appointment';

test('create an appointment', () => {

  const startsAt = new Date();
  const endAt = new Date();

  endAt.setDate(endAt.getDate() +1);

  const appointment = new Appointment({
    custumer: 'Jhon Doe',//O famoso "fulano" em inglês
    startsAt,
    endAt,
  });

  //Eu espero que o appointment seja uma instacia de Appointment
  expect(appointment).toBeInstanceOf(Appointment);
  //para validar que ele esteja assinando as propriedades certinha
  expect(appointment.custumer).toEqual('Jhon Doe');



});


test('cannot create appointment whith end date before start date', () => {
  const startsAt = new Date();
  const endAt = new Date();

  //Pego a data de fim e diminuo um dia, sendo assim o agendamento começa hoje e termina ontem.rs
  endAt.setDate(endAt.getDate() -1);
  
  expect(() => {
    return new Appointment({
      custumer: 'Jhon Doe',//O famoso "fulano" em inglês
      startsAt,
      endAt
    })
  }).toThrow();
})