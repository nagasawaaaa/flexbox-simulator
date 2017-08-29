<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">{{projectName}}</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'flex-header',
  data () {
    return {
      projectName: 'Flexbox Simulator'
    }
  }
}
</script>
