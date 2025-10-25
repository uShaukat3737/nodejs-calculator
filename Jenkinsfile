pipeline {
  agent any

  tools {
    nodejs 'NodeJS'
  }

  parameters {
    string(name: 'BRANCH_NAME', defaultValue: 'main')
    string(name: 'BUILD_ENV', defaultValue: 'dev')
    string(name: 'STUDENT_NAME', defaultValue: 'Usman Shaukat') 
  }

  environment {
    APP_VERSION = "1.1.0"  // increment for bonus 
  }

  stages {
    stage('Install Dependencies') {
      steps {
        echo "Installing Node.js dependencies..."
        sh "npm install"
      }
    }

    stage('Build') {
      steps {
        echo "Building Calculator App v${APP_VERSION} on branch ${params.BRANCH_NAME}"
      }
    }

    stage('Unit Test') {
      when {
        expression { return params.BUILD_ENV == 'dev' }
      }
      steps {
        echo 'Running unit tests with Jest...'
        sh "npm test"
      }
    }

    stage('Deploy') {
      steps {
        echo 'Simulating deployment of Node.js Calculator App...'
      }
    }
  }

  post {
    always {
      echo 'Cleaning up workspace...'
    }
    success {
      echo 'Pipeline executed successfully.'
    }
    failure {
      echo 'Pipeline failed.'
    }
  }
}
