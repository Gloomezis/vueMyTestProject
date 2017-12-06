// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store/store'
import  './commons/filters/filters.js'

Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  template: `
    <div id="app">
      <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" to="/counter">Counter</router-link>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><router-link to="/">User list</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/logos">Logos</router-link></li>
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/quiz">Quiz</router-link></li>
            <li><router-link to="/maps">Map</router-link></li>
            <li><router-link to="/secondmaps">SecondMap</router-link></li>

          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/add">Add Customer</router-link></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
      <router-view></router-view>
    </div>
  `
}).$mount('#app')
