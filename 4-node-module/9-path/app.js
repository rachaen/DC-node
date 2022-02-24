const path = require('path');

// 운영체제별로 경로가 표기하는 것이 다르다
// POSIX (Unix: Max, Linux): 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'
console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

//basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, 'js'));

//dirname
console.log(path.dirname(__filename));

//extension
console.log(path.extname(__filename));

//parse
const parsed = path.parse(__filename);
console.log(parsed);
parsed.root;
parsed.name;

const str = path.format(parsed);
console.log(str);

//isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname));
console.log('isAbsolute?', path.isAbsolute('../'));

//normalize : 알아서 이상한 경로를 수정해 줌
console.log(path.normalize('./folder/////////sub'));

// join
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));
