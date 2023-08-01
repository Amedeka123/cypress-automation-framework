pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave Node1') {
                    agent {
                      dockerfile true
                     }
                    steps {
                        git url: 'https://github.com/Amedeka123/cypress-automation-framework.git'
                        bat 'npm update'
                    }
                }
                stage('Slave Node2') {
                     agent {
                      dockerfile true
                     }
                    steps {
                        git url: 'https://github.com/Amedeka123/cypress-automation-framework.git'
                        bat 'npm update'
                    
                    }
                }
            }
        }
    }
}