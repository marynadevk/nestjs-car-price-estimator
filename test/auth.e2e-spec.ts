import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Authentication System', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('handles a signup request', () => {
    const expectedEmail = 'qwert@qwert.com';
    return request(app.getHttpServer())
      .post('/auth/signup')
      .send({ email: expectedEmail, password: 'qwert' })
      .expect(HttpStatus.CREATED)
      .then((res) => {
        const { id, email } = res.body;
        expect(id).toBeDefined();
        expect(email).toEqual(expectedEmail);
      });
  });

  it('signup as a new user then get the currently logged in user', async () => {
    const email = 'lkjh@lkjh.com';
    const res = await request(app.getHttpServer())
      .post('/auth/signup')
      .send({ email, password: 'qwer' })
      .expect(HttpStatus.CREATED);

    const cookie = res.get('Set-Cookie');

    const { body } = await request(app.getHttpServer())
      .get('/auth/whoami')
      .set('Cookie', cookie)
      .expect(HttpStatus.OK);
    expect(body.email).toEqual(email);
  });
});
