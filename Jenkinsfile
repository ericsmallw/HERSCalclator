pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'echo $BRANCH_NAME >> /home/ubuntu/test.txt'
            }
        }
    }
}