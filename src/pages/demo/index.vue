<template>
  <div>
    <ul class="container log-list">
      <li v-for="(log, index) in logs" :key="index" class="log-item">
        <card :text="log.id + ' . ' + log.city"></card>
      </li>
    </ul>
  </div>
</template>

<script>
import {http} from '@/service/base'
import card from '@/components/card'

export default {
  components: {
    card
  },

  data () {
    return {
      logs: []
    }
  },

  onLoad() {
    let self = this;
    http.get('https://www.4slx.com/index/index/foursstoreinfo', {})
      .then( function(res) {self.logs = res; console.log(self.logs)})
      .catch( function() {})
  }
}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
