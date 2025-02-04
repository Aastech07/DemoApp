require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000


const jokesData = {
  "jokes": [
    {
      "id": 1,
      "setup": "Why don't scientists trust atoms?",
      "punchline": "Because they make up everything!"
    },
    {
      "id": 2,
      "setup": "Why did the scarecrow win an award?",
      "punchline": "Because he was outstanding in his field!"
    },
    {
      "id": 3,
      "setup": "Why don’t skeletons fight each other?",
      "punchline": "They don’t have the guts."
    },
    {
      "id": 4,
      "setup": "What do you call fake spaghetti?",
      "punchline": "An impasta!"
    },
    {
      "id": 5,
      "setup": "Why couldn’t the bicycle stand up by itself?",
      "punchline": "Because it was two-tired!"
    }
  ]
};


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Jokes',(req,res)=>{
  res.send(jokesData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
      