<template>
  <div id="app">
    <flex-header></flex-header>
    <flexbox></flexbox>
  </div>
</template>

<script>
import Flexbox from './components/Flexbox'
import FlexHeader from './components/FlexHeader'
export default {
  name: 'app',
  components: {
    Flexbox,
    FlexHeader
  }
}
</script>

<style>
#app {

}
</style>
