// 1. 사용자가 원하는 폴더의 이름을 받아온다
const os = require('os');
const fs = require('fs');
const path = require('path');
const folder = process.argv[2];

const workingDir = path.join(os.homedir(), 'Pictures', folder);
if (!folder || !fs.existsSync(workingDir)) {
  console.error('Please enter folder name in Picutres');
  return;
}
// 2. 그 폴더 안에 video, captured, duplicated 폴더를 만든다
const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicated');

//folder를 만들고 파일을 동기적으로 처리해야하기 때문에 sync를 사용함
!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

// 3. 폴더 안에 있는 파일들을 다 돌면서 해당하는 mp4|mov, png|aae, IMG_1234(IMG_E1234)
fs.promises.readdir(workingDir).then(processFiles).catch(console.log);
//.then(processFiles)는
//.then(files => processFiles(files)) 동일하지만 전달하는 인자와 호출하는 인자가 같기 때문에 생략이 가능하다.
function processFiles(files) {
  files.forEach((file) => {
    if (isVideoFile(file)) {
      move(file, videoDir);
    } else if (isCapturedFile(file)) {
      move(file, capturedDir);
    } else if (isDuplicatedFile(files, file)) {
      move(file, duplicatedDir);
    }
  });
}

function isVideoFile(file) {
  const regExp = /(mp4|mov)$/gm;
  const match = file.match(regExp);
  return !!match; // match에 결과가 있다면 true 없다면 false
}

function isCapturedFile(file) {
  const regExp = /(png|aae)$/gm;
  const match = file.match(regExp);
  return !!match;
}

function isDuplicatedFile(files, file) {
  // IMG_XXXX -> IMG_EXXXX
  if (!file.startsWith('IMG_') || file.startsWith('IMG_E')) {
    return false;
  }
  const edited = `IMG_E${file.split('_')[1]}`;
  const found = files.find((f) => f.includes(edited)); //edited가 files안에 있는지 없는지
  return !!found;
}

function move(file, targetDir) {
  console.info(`move ${file} to ${path.basename(targetDir)}`);
  const oldPath = path.join(workingDir, file);
  const newPath = path.join(targetDir, file);
  fs.promises.rename(oldPath, newPath).catch(console.error);
}
