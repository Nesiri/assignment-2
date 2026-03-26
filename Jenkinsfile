pipeline {
    agent any
    environment {
        NETLIFY_PROJECT_ID = "dd6c8c2f-8a37-4901-990d-a87cccfcf467"
        NETLIFY_AUTH_TOKEN = credentials("netlify_ID")  
    }
    stages {
        stage("Build") {
            agent {
                docker {
                    image 'node:24.14.1-alpine3.23'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    npm install
                    npm run build
                    node --version
                    npm --version
                    ls -la
                '''
            }
            post {
                always {
                    echo "========always========"
                }
                success {
                    echo "========Build executed successfully========"
                }
                failure {
                    echo "========Build execution failed========"
                }
            }
        }

        stage("Test") {
            agent {
                docker {
                    image 'node:24.14.1-alpine3.23'
                    reuseNode true
                }
            }
            steps {
                sh 'npm test'
            }
            post {
                always {
                    echo "=====always===="
                }
                success {
                    echo "====Test Success===="
                }
                failure {
                    echo "====Test failed===="
                }
            }
        }

        stage("Deploy") {
            agent {
                docker {
                    image 'node:24.14.1-alpine3.23'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    npm install netlify-cli
                    echo "Deploying to Netlify projectId: $NETLIFY_PROJECT_ID"
                    # Export the token for Netlify CLI
                    export NETLIFY_AUTH_TOKEN=$NETLIFY_AUTH_TOKEN
                  ./node_modules/.bin/netlify deploy --prod --dir=build --site=$NETLIFY_PROJECT_ID
                '''
            }
            post {
                success {
                    echo "===Deployed to Netlify====="
                }
                failure {
                    echo "=====Failed to deploy to Netlify======"
                }
            }
        }
    }

    post {
        always {
            echo "========always========"
        }
        success {
            echo "========pipeline executed successfully ========"
        }
        failure {
            echo "========pipeline execution failed========"
        }
    }
}