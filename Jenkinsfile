pipeline {
    agent { docker 'node:6.10.0' }
    stages {
        stage('build') {
            steps {
                if(env.BRANCH_NAME == "master"){
                    sh 'npm --version >> /home/ubuntu/test.txt'
                }else {
                    sh 'node --version >> /home/ubuntu/test2.txt'
                }
            }
        }
    }
}