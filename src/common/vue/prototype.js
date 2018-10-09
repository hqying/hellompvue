import Vue from 'vue'
import {api} from '@/service/api'

Vue.$api = Vue.prototype.$api = api
