import express from "express"
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = process.env.PORT

const data = {
  "login": "uvpatel",
  "id": 177721688,
  "node_id": "U_kgDOCpfRWA",
  "avatar_url": "https://avatars.githubusercontent.com/u/177721688?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/uvpatel",
  "html_url": "https://github.com/uvpatel",
  "followers_url": "https://api.github.com/users/uvpatel/followers",
  "following_url": "https://api.github.com/users/uvpatel/following{/other_user}",
  "gists_url": "https://api.github.com/users/uvpatel/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/uvpatel/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/uvpatel/subscriptions",
  "organizations_url": "https://api.github.com/users/uvpatel/orgs",
  "repos_url": "https://api.github.com/users/uvpatel/repos",
  "events_url": "https://api.github.com/users/uvpatel/events{/privacy}",
  "received_events_url": "https://api.github.com/users/uvpatel/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Patel Urvil ",
  "company": null,
  "blog": "https://urvilpatel-portfolio.netlify.app/",
  "location": "Anklav , Anand, Gujarat, India",
  "email": null,
  "hireable": null,
  "bio": "Web Dev Learner | Python & C Programmer | Exploring AI/ML | Focused",
  "twitter_username": "UrvilPatel_1708",
  "public_repos": 46,
  "public_gists": 0,
  "followers": 25,
  "following": 9,
  "created_at": "2024-08-07T07:25:48Z",
  "updated_at": "2025-10-05T14:41:13Z"
}

app.get('/', (req,res) => {
    res.send('Hello world!')
})



app.get('/login', (req,res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/github',(req,res) => {
    res.json(data)
})

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`);
})
