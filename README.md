# Qasar Multi Axios (quasar-multi-axios)

Quasar Multi Axios Implementation Usage and Checks

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Multiple Axios Instances

This project demonstrates how to create and use multiple Axios instances for handling API requests. Below is an example of how instances are configured:

1. **Authenticated Instance**: Used for APIs requiring authentication. It retrieves the token from session storage and includes it in the request headers.
2. **Unauthenticated Instance**: Used for APIs that do not require authentication.

### Example: Creating Axios Instances

```javascript
import axios from 'axios'

// Authenticated instance
const authAxios = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    Authorization: `Token ${sessionStorage.getItem('authToken')}`,
  },
})

// Unauthenticated instance
const publicAxios = axios.create({
  baseURL: 'https://api.example.com',
})
```

### Accessing APIs

#### With Authentication

To access APIs requiring authentication, use the `authAxios` instance. Ensure the token is stored in session storage before making the request.

```javascript
authAxios
  .get('/protected-endpoint')
  .then((response) => {
    console.log('Authenticated API Response:', response.data)
  })
  .catch((error) => {
    console.error('Error accessing authenticated API:', error)
  })
```

#### Without Authentication

For public APIs, use the `publicAxios` instance.

```javascript
publicAxios
  .get('/public-endpoint')
  .then((response) => {
    console.log('Public API Response:', response.data)
  })
  .catch((error) => {
    console.error('Error accessing public API:', error)
  })
```

### Using Session Storage

Session storage is used to store and retrieve the authentication token.

#### Storing Data

```javascript
sessionStorage.setItem('authToken', 'your-auth-token')
```

#### Retrieving Data

```javascript
const token = sessionStorage.getItem('authToken')
console.log('Retrieved Token:', token)
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
