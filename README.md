
# GBIT Website (School)

The `GBIT Website` is a study project with the aim of providing the Lycée Gaston Berger Student Association with a website. The website must be mobile responsive and must contain a landing page, a contact form that stores contact information into a database and also a privacy policy to be in line with the EU `General Data Protection Regulation`.

[GBIT Website]() is a project by [Moussa](), aka MrInspection or ProjectUltron

## 🔄️ Features 

- Prisma ORM `Database Management`
- Supabase Database `PostgreSQL Database`
- Authentication System
  - Custom Login Page
  - Passwordless Auth
  - 0Auth : Google & Microsoft
      
- Community System
  - Comment Section
  - Subreddit Section
  - Voting System : `UPVOTE, VOTE`
  - Pagination System
- Username Generator
- Dynamic Routing
- Caching & Pending States
- Streaming with Suspense Boundaries
- Server Side Implementation
- Speed optimization

## 🛠️ Development Stack 

- `NextJS`
- `Typescript`
- `TailwindCSS`
- `Shadcn UI`
- `React`

## Environment Variables

```dotenv
KINDE_CLIENT_ID=
KINDE_CLIENT_SECRET=
KINDE_ISSUER_URL=
KINDE_SITE_URL=
KINDE_POST_LOGOUT_REDIRECT_URL=
KINDE_POST_LOGIN_REDIRECT_URL=

DATABASE_URL=
DIRECT_URL=
```

## How to run this project ?
To run this project on your local environment, follow the following steps : 
- Clone the repository to your local machine or download the source code.
- Run the command `npm install` in the project directory to install the **required** dependencies
- Run the command `npm run start` to start the `production build` of the project.
- Open your internet browser and go to the following address: [http://localhost:3000](http://localhost:3000)
  ㅤ
---

## What can I improve ?
- Use NextAuth instead of Kinde Auth for user authentication.
- Use a Markdown text editor instead of invoking an external library.
- The ability to use the voting system on comments.
- The ability to upload images and further customize the user profile.



| Project ID  | Name | Type                  | Leadership                                  | ProjectUltron Programs | Status          |
|-------------|------|-----------------------|---------------------------------------------|------------------------|-----------------|
| pulabs-gbit | GBIT | `Web Project, School` | [Moussa]("https://github.com/MrInspection") | Labs, Argumentum       | `In Production` |