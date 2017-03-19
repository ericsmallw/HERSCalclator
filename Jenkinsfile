pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'cd /home/ubuntu/HERSCalculator'
                sh 'git pull'
                sh 'npm install'
                sh 'gulp deploy --branch $BRANCH_NAME'
            }
        }
    }
}