# BeyondPlay app

Front-end - Next.js + React, back-end - express.js

### Run

Development server:

```bash
yarn install

yarn run dev
```

It will start both front-end and back-end

Default ports:

- Front :3000
- Back :8080

### Backend endpoints

`/health - returns 200 'Ok'

```
/graphql

Supports:
  "query": "{ logs { userId, endpoint } }" - returns all logs (hardcoded)
  "query": "{ lastLog { userId, endpoint } }" - returns last log (hardcoded)
```
