const EventEmitter = require('events');
const emitter = new EventEmitter();
const callback1 = (args) => {
  console.log('first callback - ', args);
};

emitter.on('ellie', callback1);
emitter.on('ellie', (args) => {
  console.log('second callback - ', args);
});

//emit: 이벤트 발생시킴
emitter.emit('ellie', { message: 1 });
emitter.removeListener('ellie', callback1); // 콜백 함수 제거
emitter.emit('ellie', { message: 2 });
emitter.removeAllListeners(); // 등록된 모든 콜백 함수 제거
emitter.emit('ellie', { message: 3 });
