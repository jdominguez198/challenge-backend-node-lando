import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/radar (POST) with closest-enemies', () => {
    const body = {
      protocols: ['closest-enemies'],
      scan: [
        {
          coordinates: { x: 10, y: 10 },
          enemies: { type: 'soldier', number: 1 },
        },
        {
          coordinates: { x: 50, y: 50 },
          enemies: { type: 'soldier', number: 1 },
        },
      ],
    };
    return request(app.getHttpServer())
      .post('/radar')
      .send(body)
      .expect(200)
      .expect({ x: 10, y: 10 });
  });

  it('/radar (POST) with furthest-enemies', () => {
    const body = {
      protocols: ['furthest-enemies'],
      scan: [
        {
          coordinates: { x: 10, y: 10 },
          enemies: { type: 'soldier', number: 1 },
        },
        {
          coordinates: { x: 50, y: 50 },
          enemies: { type: 'soldier', number: 1 },
        },
      ],
    };
    return request(app.getHttpServer())
      .post('/radar')
      .send(body)
      .expect(200)
      .expect({ x: 50, y: 50 });
  });

  it('/radar (POST) with prioritize-mech', () => {
    const body = {
      protocols: ['prioritize-mech'],
      scan: [
        {
          coordinates: { x: 10, y: 10 },
          enemies: { type: 'soldier', number: 1 },
        },
        {
          coordinates: { x: 50, y: 50 },
          enemies: { type: 'mech', number: 1 },
        },
      ],
    };
    return request(app.getHttpServer())
      .post('/radar')
      .send(body)
      .expect(200)
      .expect({ x: 50, y: 50 });
  });

  it('/radar (POST) with avoid-mech', () => {
    const body = {
      protocols: ['avoid-mech'],
      scan: [
        {
          coordinates: { x: 10, y: 10 },
          enemies: { type: 'soldier', number: 1 },
        },
        {
          coordinates: { x: 50, y: 50 },
          enemies: { type: 'mech', number: 1 },
        },
      ],
    };
    return request(app.getHttpServer())
      .post('/radar')
      .send(body)
      .expect(200)
      .expect({ x: 10, y: 10 });
  });

  it('/radar (POST) with assist-allies', () => {
    const body = {
      protocols: ['assist-allies'],
      scan: [
        {
          coordinates: { x: 10, y: 10 },
          enemies: { type: 'soldier', number: 1 },
        },
        {
          coordinates: { x: 50, y: 50 },
          enemies: { type: 'mech', number: 1 },
          allies: 5,
        },
      ],
    };
    return request(app.getHttpServer())
      .post('/radar')
      .send(body)
      .expect(200)
      .expect({ x: 50, y: 50 });
  });

  it('/radar (POST) with avoid-crossfire', () => {
    const body = {
      protocols: ['avoid-crossfire'],
      scan: [
        {
          coordinates: { x: 10, y: 10 },
          enemies: { type: 'soldier', number: 1 },
          allies: 5,
        },
        {
          coordinates: { x: 50, y: 50 },
          enemies: { type: 'mech', number: 1 },
        },
      ],
    };
    return request(app.getHttpServer())
      .post('/radar')
      .send(body)
      .expect(200)
      .expect({ x: 50, y: 50 });
  });
});
