let fs = require("fs");
const data = fs.readFileSync("tiktok.txt", {encoding:'utf8', flag:'r'}).split("\n");
let newData = [];

for (let i = 0; i < data.length; i++) {
    if (!newData.includes(data[i])) {
        newData.push(data[i]);
    }
}

const file = fs.createWriteStream('newTiktok1.txt');
newData.forEach(function(v) {v = v.split(" "); file.write(v[2]+":"+v[5]+"\n")});
file.end();
console.log("Finished removing duplicates.");