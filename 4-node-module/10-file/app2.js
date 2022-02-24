const fs = require('fs').promises;

// read a file
fs.readFile('./text.txt', 'utf-8')
  .then((data) => console.log(data))
  .catch(console.error);

//writing a file
fs.writeFile('./file.txt', 'Hello, Dream Coders!').catch(console.error);
//기존 파일에 텍스트를 추가하고 싶을 때 writeFile은 덮어쓰기가 됨
fs.appendFile('./file.txt', 'Yo!, Dream Coders!')
  .then(() => {
    //copy
    fs.copyFile('./file.txt', './file2.txt').catch(console.error);
  })
  .catch(console.error);

//folder
fs.mkdir('sub-folder').catch(console.error);

fs.readdir('./').then(console.log).catch(console.error);
