const logger = require('./logger.js');
const emitter = new logger.Logger();
emitter.on('log', (event) => {
  console.log(event);
});
emitter.log(() => {
  console.log('...... doing something');
});

//이벤트 emitter는 한번 객체를 만들면 객체 내에서 발생하는 이벤트에 한에서 들을 수 있다
// 여러가지 이벤트 emitter를 만들면 다른 emitter에서 발생하는 이벤트는 다른 이벤트에서 들을 수 없다
