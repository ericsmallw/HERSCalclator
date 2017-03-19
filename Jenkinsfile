pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                node {
                        sh 'echo ${env.BRANCH_NAME} >> /home/ubuntu/test.txt'
                }
            }
        }
    }
}