pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave Node1') {
                    agent {
                        docker { 
                            image 'cypress/included:latest'
                            args '-w /home/jenkins/workspace/cypress_automation_pipeline@2'
                        }
                    }
                    steps {
                        git url: 'https://github.com/qauni/cypress-automation-framework.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triggerAllTests-autostore-dashboard'
                    }
                }
                stage('Slave Node2') {
                    agent {
                        docker { 
                            image 'cypress/included:latest'
                            args '-w /home/jenkins/workspace/cypress_automation_pipeline@3'
                        }
                    }
                    steps {
                        git url: 'https://github.com/qauni/cypress-automation-framework.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triggerAllTests-autostore-dashboard'
                    }
                }
            }
        }
    }
}