<template>
  <div class="container">
    <header class="jumbotron">
      <h3>Dashboard for Pi Calculator</h3>
    </header>
    <p>
      <strong>Current Pi Value:</strong>
      {{ curPi }} <button @click="getNewPi()">Get New Pi</button>
    </p>
    <p>
      <strong>Circumference of the sun:</strong>
      {{ sunCircumference }}
    </p>
  </div>
</template>

<script>
import CalculatorService from '../services/calculator.service'

export default {
  name: 'Dashboard',
  computed: {
    currentUser() {
      return this.$store.state.auth.user
    },
    curPi() {
      return localStorage.getItem('curPivalue')
    },
    sunCircumference() {
      return localStorage.getItem('sunCircumference')
    }
  },
  methods: {
    getNewPi() {
      CalculatorService.getNewPi().then(
        (response) => {
          localStorage.removeItem('curPivalue')
          localStorage.setItem('curPivalue', response.data.data.piValue)
          location.reload()
        },
        (error) => {
          this.content =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        }
      )

      CalculatorService.getSunCircumference().then(
        (response) => {
          localStorage.removeItem('sunCircumference')
          localStorage.setItem('sunCircumference', response.data.data.value)
        },
        (error) => {
          this.content =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        }
      )
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login')
    }

    if (this.curPi == '' || !this.curPi) {
      CalculatorService.getCurrentPi().then(
        (response) => {
          localStorage.removeItem('curPivalue')
          localStorage.setItem('curPivalue', response.data.data.piValue)
        },
        (error) => {
          this.content =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        }
      )

      CalculatorService.getSunCircumference().then(
        (response) => {
          localStorage.removeItem('sunCircumference')
          localStorage.setItem('sunCircumference', response.data.data.value)
        },
        (error) => {
          this.content =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        }
      )
    }
  }
}
</script>