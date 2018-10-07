import EventEmitter from 'events';

class AppStore extends EventEmitter {
  constructor() {
    super();
  }
}

export default new AppStore();
