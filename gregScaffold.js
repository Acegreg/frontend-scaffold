const fs = require("fs");

const folder = "./frontend-scaffold";

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./css/style.css">
<title>Document</title>
</head>
<body>
<h1>Welcome</h1>
<script src="./js/script.js"></script>
</body>
</html>`;

const cssContent = `h1 {
text-align:center;
}`;

const jsContent = `alert("Welcome");`;

function createFolder() {
  fs.mkdirSync(folder);
  fs.writeFileSync(`${folder}/index.html`, htmlContent);
  fs.mkdirSync(`${folder}/css`);
  fs.writeFileSync(`${folder}/css/style.css`, cssContent);
  fs.mkdirSync(`${folder}/js`);
  fs.writeFileSync(`${folder}/js/index.js`, jsContent);
  fs.mkdirSync(`${folder}/images`);
  console.log(`“Frontend scaffold created successfully!”`);
}

try {
  if (!fs.existsSync(folder)) {
    createFolder();
  }
} catch (err) {
  console.error(err);
}
