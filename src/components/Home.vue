<template>
  <div class="container">
    <header class="jumbotron">
      <h3>Pi History</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Pi Value</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in items" :key="i">
            <th scope="row">{{ item.id }}</th>
            <td>{{ item.piValue }}</td>
            <td>{{ formatDate(item.createdAt) }}</td>
          </tr>
        </tbody>
      </table>
    </header>
  </div>
</template>

<script>
import CalculatorService from '../services/calculator.service'
import moment from 'moment'

export default {
  name: 'Home',
  data() {
    return {
      items: ''
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      // Then specify how you want your dates to be formatted
      return moment(dateString).format('hh:mm MM/DD/YYYY ')
      // return new Intl.DateTimeFormat('default', { dateStyle: 'long' }).format(date)
    }
  },
  mounted() {
    CalculatorService.getPiHistory().then(
      (response) => {
        this.items = response.data.data
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
</script>
