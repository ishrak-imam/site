import io from 'socket.io-client';
import socketio from 'feathers-socketio/client'
import authentication from 'feathers-authentication-client';
import feathers from 'feathers/client';
import hooks from 'feathers-hooks';

import CONSTANTS from './config/constants';
const SERVICE_NAMES = CONSTANTS.SERVICE_NAMES;


class Client {

  constructor() {
    const socket = io(CONSTANTS.SERVER_URL, CONSTANTS.SOCKET_OPTIONS);
    this.app = feathers()
      .configure(socketio(socket))
      .configure(hooks())
      .configure(authentication({
        storage: window.localStorage,
        storageKey: CONSTANTS.JWT_KEY
      }));

    this.userService = this.app.service(SERVICE_NAMES.USERS);
  }

  createUser = (userData) => this.userService.create(userData);
  authenticate = (options) => this.app.authenticate(options);
  verifyJWT = (jwt) => this.app.passport.verifyJWT(jwt);
  getUser = (userId) => this.userService.get(userId);
  logout = () => this.app.logout();
  getJWT = () => this.app.passport.getJWT();

}

export default Client = new Client(); // to make singleton
