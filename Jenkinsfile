pipeline {
    agent { docker 'node:6.10.0' }
    stages {
        stage('build') {
            steps {
                    sh 'node --version >> /home/ubuntu/test2.txt'
            }
        }
    }
}