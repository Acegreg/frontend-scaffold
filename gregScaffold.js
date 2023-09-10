const fs = require("fs");

const folderName = "./frontend-scaffold";

const htmlText = `<!DOCTYPE html>
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

const cssText = `h1 {
text-align:center;
}`;

const jsText = `alert("Welcome");`;

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, htmlText);
    fs.mkdirSync(`${folderName}/css`);
    fs.writeFileSync(`${folderName}/css/style.css`, cssText);
    fs.mkdirSync(`${folderName}/js`);
    fs.writeFileSync(`${folderName}/js/index.js`, jsText);
    fs.mkdirSync(`${folderName}/images`);
    console.log(`“Frontend scaffold created successfully!”`);
  }
} catch (err) {
  console.error(err);
}
