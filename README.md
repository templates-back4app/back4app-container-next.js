This repository demonstrates dockerizing and deploying a [Next.js](https://nextjs.org/) application to Back4app Containers.
The project is bootstrapped using [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. Fork/clone the repository
2. install the necessary dependencies
    
    ```bash
    npm install
    ```
    
3. Run the development server
    
    ```bash
    npm run dev
    ```
    
4. Open [http://localhost:3000](http://localhost:3000) with your browser to view your Next.js app.

    ![advice-generator-app](assets/advice-generator-app.webp)



## Dockerize Your Application

1. Install Docker (If you haven’t installed it already)
2. Build the docker image
    
    ```bash
    docker build -t advice-generator .
    ```
    
3. Run the docker image as a container
    
    ```bash
    docker run -p 3000:3000 advice-generator
    ```
    
4. Navigate to [http://localhost:3000/](HTTP://localhost:3000/) in your web browser to access the application

## Deploy on Back4App

1. Push the application to a GitHub repository
2. Set Up Your Back4app Account
3. Create a Back4app CaaS application 

   ![new-back4app-application](assets/new-back4app-application.webp)
    
4. Link your GitHub account to the Back4app application
    
    ![link-github](assets/link-github.webp)
    
5. Select the application’s repository
    
    ![select-repository](assets/select-repository.webp)
    
6. Deploy the application
    
    ![deployed-application](assets/deployed-application.webp)


Your Next.js app will now been deployed on the Back4app container platform!
