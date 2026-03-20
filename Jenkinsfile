pipeline {
    agent any

    environment {
        IMAGE_NAME = "ecommerce-app"
        CONTAINER_NAME = "ecommerce-container"
        PORT = "8080"
    }

    stages {

        stage('1. SCM - Pull Code') {
            steps {
                git url: 'https://github.com/your-username/ecommerce-app.git', branch: 'main'
            }
        }

        stage('2. Stop & Remove Old Container') {
            steps {
                script {
                    sh """
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true
                    """
                }
            }
        }

        stage('3. Remove Old Image') {
            steps {
                script {
                    sh """
                    docker rmi ${IMAGE_NAME} || true
                    """
                }
            }
        }

        stage('4. Build Docker Image') {
            steps {
                script {
                    sh """
                    docker build -t ${IMAGE_NAME} .
                    """
                }
            }
        }

        stage('5. Run Docker Container') {
            steps {
                script {
                    sh """
                    docker run -d -p ${PORT}:80 --name ${CONTAINER_NAME} ${IMAGE_NAME}
                    """
                }
            }
        }
    }

    post {
        success {
            echo "Deployment Successful 🚀"
        }
        failure {
            echo "Pipeline Failed ❌"
        }
    }
}
