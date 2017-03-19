pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                if(env.BRANCH_NAME == 'master'){
                    sh 'node --version >> /home/ubuntu/test.txt'
                }else {
                    sh 'npm --version >> /home/ubuntu/test3.txt'
                }
            }
        }
    }
}