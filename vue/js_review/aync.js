axios = require('axios')

async function getBoard(){
  let res = await axios("http://localhost:3000/board/1")
  console.log("2", res.data.title);
}

getBoard();
console.log("1", "the end");