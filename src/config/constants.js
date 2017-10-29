const CONSTANTS = {
  SERVER_URL: 'http://localhost:3030',
  SOCKET_OPTIONS: { transports: ['websocket'], pingTimeout: 3000, pingInterval: 5000 },
  JWT_KEY: 'jwt_token',

  SERVICE_NAMES: {
    USERS: 'users',
  }
}

export default CONSTANTS;
