
# Mrsool SRE Challenge

Hi! You're probably here because you're interested in SRE position at Mrsool's Site Reliability Engineering team. We made this challenge to see how comfortable you are with day-to-day SRE tasks.

***Please read this guide carefully before starting the challenge.***

## A) Web Application 
Write a simple online-food-ordering web application that does the following:
1. Allow users to register and login.
2. Allow users to upload their own avatar.
3. Allow users to see all restaurants.
4. Allow users to post text orders to any restaurant (no menu needed).
5. Allow users to see their orders history.
6. Allow admins to CRUD restaurants.
6. Allow admins to see all restaurants with their orders.

Please note the following:
- You can write the application in any language/framework you're comfortable with, preferably Ruby on Rails. However, the language/framework choice won't affect the score. 
- Use any database engine but **be sure to add connection pooling** thus a lot of app instances doesn't crash the database.
- While having responsive shiny UI is cool. However, it's not required and not advised. Also, it's time-consuming. Plain HTML or JSON works just fine, and it won't affect the score.
- Please stick to the mentioned features literally, any additional features won't affect the score.
- The application should have `/healthz` route to monitor the application health.
- The application should comply with https://12factor.net roles.

## B) Dockerizing the Application

Dockerize your web application by writing `Dockerfile` to create a Docker image of your application and `docker-compose.yaml` to help other developers start a local-running-copy of your app.

Please note the following:
- Try to optimize the `Dockerfile` by removing all unnecessary cache/files to reduce the image size.
- Removing unnecessary binaries/permissions to improve container security is a huge plus.
- Please add all components that are required to run the app (i.e database) in `docker-compose.yaml`. Ideally, on a new machine, you can start the app just by running `docker-compose up`.

## C) Kubernetes Deployment
Write the necessary YAML files to deploy a production-ready instance of your web application to a running Kuberentes cluster.

Please note that your Kubernetes specs should allow your application to:
- Recover from broken states by automatically restarting pods (using built-in Kubernetes feature).
- Route the traffic to the healthy pods only (using built-in Kubernetes feature).
- Automatically scaled based on CPU usage. 
- Use `configmaps` to read the required environment variables.
- Have declarative resources limits (CPU, RAM).

## D) Challenge Delivery 
After finishing the challenge send compressed challenge folder with `.git` folder, as the git commit messages will be reviewed.

Please try to avoid one commit as it's harder to track the changes and understand how the development progressed.


## how we calculate the score

After receiving the challenge we will use the following table to score your submission:

|section| description | points
|--|--|--|
| A | Completing all the required features bug free |5
|A  | Add connection pooling | 5
|A| Comply with https://12factor.net roles | 10
|B| Clean Dockerfile | 10
|B| Docker image size | 5
|B| `docker-compose up` to run the whole app| 5
|B| Docker image security| 5
|C| Using Kubernetes probes|10
|C| Automatic scaling | 10
|C| Using configmaps | 5
|C| Adding declarative resources limits | 5
|D| Using Git with clean commit message |10
|D| Deliver on time|10
|*| Using Helm | 20

