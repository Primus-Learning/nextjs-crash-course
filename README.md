Hello 👋🏼,

this repository contains both the starter files and the final code necessary for this course's project, **ReelRanger**.

![ReelRanger Demo](https://res.cloudinary.com/uglymolluska/image/upload/v1680144208/reelranger_demo_vbekq1.gif)

**ReelRanger** allow users to sign in and search for their favorite movies, view basic information about them, and most importantly, add them to their watchlist.

We'll be using a number of tools and technologies to build this app, including NextAuth for authentication, Supabase to host the Postgres database, Prisma as an ORM for the database, Mantine UI for the user interface, RapidAPI to retrieve movie data, and SWR for client-side fetching.

Tools and Technologies Used
---------------------------

The following tools and technologies were used to build this project:

-   [Next.js](https://nextjs.org/): A flexible React framework that gives you building blocks to create fast web applications.
-   [NextAuth](https://supabase.com/): A library providing authentication, authorization, and session management for NextJs applications.
-   [Supabase](https://supabase.com/): An open source Firebase alternative with PostgreSQL.
-   [Prisma](https://www.prisma.io/): A modern database toolkit for TypeScript and Node.js that lets you interact with databases like you interact with your code.
-   [RapidAPI](https://rapidapi.com/): A platform that enables developers to find, connect to, and manage APIs.
-   [Mantine](https://mantine.dev/): A React UI library with a focus on usability and accessibility.

Getting Started
---------------

To get started with this project, you'll need to have Node.js installed on your computer. You can use yarn or npm as your package manager of choice. You'll also need to create accounts with RapidAPI and Supabase to use their services.

### Branches

This repository contains two branches:

-   `main`: This branch contains the final code that the deployed application runs on.
-   `starter`: This branch contains the starter files for the tutorial.

We recommend cloning the `starter` branch and following along with the tutorial.

### Clone the Repository

To clone this repository, run the following command:

`git clone --branch starter https://github.com/Primus-Learning/nextjs-crash-course.git
`

### Install Dependencies

After cloning the repository, navigate to the project directory and install the dependencies by running the following command:


`yarn install` or `npm install`

### Environment Variables

To run the project, you'll need to set up the following environment variables in an `.env` file:


`RapidAPIKey=<your_rapidapi_key>` <br>
`RapidAPIHost=<your_rapidapi_host>` <br>
`DATABASE_URL=<your_database_url>` <br>
`GITHUB_ID=<your_github_id>` <br>
`GITHUB_SECRET=<your_github_secret>` <br>
`NEXTAUTH_SECRET=<your_nextauth_secret>`

### Starting the Development Server

To start the development server, run the following command:

`yarn dev` or `npm run dev`

The development server should now be running at [http://localhost:3000](http://localhost:3000/).


Conclusion
----------

That's it! We hope you enjoy building this movie management app and learning how to build full-stack web applications with Next.js. If you have any questions or feedback, please let us know.