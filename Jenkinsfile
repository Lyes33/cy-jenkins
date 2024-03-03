pipeline{
    agent any
    
    parameters{
        string(name: "SPEC", defaultValue: "cypress/e2s/**/**", description:"")
        choice(name: "BROWSER", choices: ['chrome', 'edge', 'firefox'], description: "")  
    }
    
    options{
        ansiColor('xterm')
        environment {
            MAVEN_OPTS = '-Djansi.force=true'
        }

    }

    stages{
        stage('Build'){
            steps{
                echo "Buildin application"
            }
        }
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploy'){
            steps{
                echo "Deploying the application "
            }
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
        }
    }
}