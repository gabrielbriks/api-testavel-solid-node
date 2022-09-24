import { expect, test } from 'vitest';
import { getFutureDate } from '../tests/utils/get-future-date';
import { Appointment } from './appointment';

test('create an appointment', () => {

  const startsAt = getFutureDate('2022-09-24');
  const endAt = getFutureDate('2022-09-25');

  
  startsAt.setDate(startsAt.getDate() + 1);
  endAt.setDate(endAt.getDate() +2);

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


test('cannot create appointment whith end date before startAt date', () => {
  const startsAt = getFutureDate('2022-09-24');
  const endAt = getFutureDate('2022-09-23');

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


test('cannot create appointment whith startAt date before now', () => {
  const startsAt = new Date();
  const endAt = new Date();

  //Pego a data de fim e diminuo um dia, sendo assim o agendamento começa hoje e termina ontem.rs
  startsAt.setDate(startsAt.getDate() -1);
  endAt.setDate(endAt.getDate() +3);


  
  expect(() => {
    return new Appointment({
      custumer: 'Jhon Doe',//O famoso "fulano" em inglês
      startsAt,
      endAt
    })
  }).toThrow();
})