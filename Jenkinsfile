pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git branch: 'main',
        git(url: 'https://github.com/DavisKiprotich/Todo-list-simplified', branch: 'dev')
      }
    }

  }
}