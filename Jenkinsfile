pipeline{
    agent any
    
    parameters{
        string(name: "SPEC", defaultValue: "cypress/e2e/**/**", description:"Entrer le chemin des testsà éxecuter")
        choice(name: "BROWSER", choices: ['chrome', 'edge', 'firefox'], description: "Choisir le navigateur")  
    }

    options{
        ansiColor('xtrem')
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
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '']),
            emailext (
                subject: "Pipeline Status: ${JOB_NAME}",
                body: '''<html>
                            <body> 
                                <p>Build status: ${BUILD_STATUS}</p>
                                <p>Build number: ${BUILD_NUMBER}</p>
                                <p>check the <a href="${BUILD_URL}"> console output</a>.</p>
                            </body>
                         </html>''',
                to: 'benaouadilyes@gmail.com',
                from: 'jenkins@example.com',
                replyTo: 'jenkins@example.com',
                mimeType: 'text/html'
                
                )
            }
        }
    }
}
