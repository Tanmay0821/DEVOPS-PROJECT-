pipeline {
    agent any

    environment {
        IMAGE_NAME = "frontend-app"
        CONTAINER_NAME = "frontend-container"
    }

    stages {

        stage('Clone Repo') {
            steps {
                git 'https://github.com/your-repo/frontend-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t $IMAGE_NAME .'
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    sh '''
                    docker stop $CONTAINER_NAME || true
                    docker rm $CONTAINER_NAME || true
                    docker run -d -p 8080:80 --name $CONTAINER_NAME $IMAGE_NAME
                    '''
                }
            }
        }

        stage('Test App') {
            steps {
                script {
                    sh 'curl -I http://localhost:8080'
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful 🚀'
        }
        failure {
            echo 'Build Failed ❌'
        }
    }
}
