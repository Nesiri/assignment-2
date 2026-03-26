pipeline{
    agent any
    
    stages{
        stage("Build"){
            
            agent {
                Docker{
                    image:'node:24.14.1-alpine3.23'
                    reuseNode:true
                }
            }
            steps{
               sh '''
                  npm install
                  npm run build
                  node --version
                  npm --version
                  ls -la
               '''
            }
            post{
                always{
                    echo "========always========"
                }
                success{
                    echo "========Build executed successfully========"
                }
                failure{
                    echo "========Build execution failed========"
                }
            }
        }
        stage("Test"){
            agent {
                Docker{
                    image:'node:24.14.1-alpine3.23'
                    reuseNode:true
                }
            }
            steps{
                sh '''
                   npm  test
                  
                   '''
            }
            post{
                always{
                    echo "=====always===="
                }
                success{
                    "====Test Sucess"
                }
                failure{
                    "====Test failed"
                }
            }
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}