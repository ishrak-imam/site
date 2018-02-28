const CONSTANTS = {
  SERVER_URL: 'http://localhost:8888',
  SOCKET_OPTIONS: { transports: ['websocket'], pingTimeout: 3000, pingInterval: 5000 },
  JWT_KEY: 'jwt-token',

  SERVICE_NAMES: {
    USERS: 'users'
  }
};

export default CONSTANTS;
