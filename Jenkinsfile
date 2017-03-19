pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'cd /home/ubuntu/HERSCalculator'
                sh 'gulp deploy --branch $BRANCH_NAME'
            }
        }
    }
}