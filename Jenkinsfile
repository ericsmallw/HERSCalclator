pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'echo ${env.BRANCH_NAME} >> /home/ubuntu/test.txt'
            }
        }
    }
}