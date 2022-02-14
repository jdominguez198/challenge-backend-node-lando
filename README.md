# Challenge Backend NodeJS - Lando

## Introduction

This is a challenge for a Senior NodeJS Backend Developer. The requirements to complete it are:
- Maintainable
- Extensible
- Apply Object Oriented Programming good practices
- Testing

## Stack Used

I've used NestJS as "framework" to reduce time creating routes and looking for libraries to testing and other stuff.
Also, used TypeScript instead of vanilla Javascript for a better match with OOP.

## Getting Started

### With NodeJS in host

1. Install dependencies:

```bash
yarn install
```

2. Run server

```bash
yarn start
```

3. Run codetest script

```bash
./codetest/tests.sh
```

4. Run unit tests

```bash
yarn test
```

5. Run e2e tests

```bash
yarn test:e2e
```

### With Docker

1. Bring up Docker container

```bash
docker-compose up -d
```

2. Run codetest script

```bash
docker-compose exec app ./codetest/tests.sh
```

3. Run unit tests

```bash
docker-compose exec app yarn test
```

4. Run e2e tests

```bash
docker-compose exec app yarn test:e2e
```

## Notes

Some required tips for the challenge:
- Accept and Response JSON as data type
- Unique `/radar` POST endpoint
- Protocols defined:
  - `closest-enemies`: Closest coordinates with enemies
  - `furthest-enemies`: Furthest coordinates with enemies
  - `assist-allies`: Coordinates with allies should be prioritized
  - `avoid-crossfire`: Coordinates without allies should be prioritized
  - `prioritize-mech`: Attack `mech` enemies
  - `avoid-mech`: Avoid attach `mech` enemies
- Multiple protocols can be used, but compatible between them
- Targets far away of 100 meters should be skipped
