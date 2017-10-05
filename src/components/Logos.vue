<template>
  <div id="some">
    <div id="bodysa">
      <div id="logo">
        <div class="wrapper row">
          <div class="col-md-6 col-md-offset-3">
            <div class="card   col-md-4 " v-for="logo in logoList">
              <a v-bind:href="logo.link" target="_blank">
                <img v-bind:src="logo.img"/>
                <small>Posted by {{logo.author}}</small>
                {{logo.title}}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  class Post {
    constructor(title, link, author, img) {
      this.title = title;
      this.link = link;
      this.author = author;
      this.img = img;
    }
  }

  export default {

    name: 'logos',
    data() {
      return {
        logoList: [
          new Post(
            'Vue.js',
            'https://vuejs.org/',
            'Chris',
            'https://vuejs.org//images/logo.png'
          ),
          new Post(
            'React.js',
            'https://facebook.github.io/react/',
            'Tim',
            'http://daynin.github.io/clojurescript-presentation/img/react-logo.png'
          ),
          new Post(
            'Angular.js',
            'https://angularjs.org/',
            'Sam',
            'https://angularjs.org/img/ng-logo.png'
          ),
          new Post(
            'Ember.js',
            'http://emberjs.com/',
            'Rachel',
            'http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200'
          ),
          new Post(
            'Meteor.js',
            'https://www.meteor.com/',
            'Chris',
            'http://hacktivist.in/introduction-to-nodejs-mongodb-meteor/img/meteor.png'
          ),
          new Post(
            'Aurelia',
            'http://aurelia.io/',
            'Tim',
            'https://cdn.auth0.com/blog/aurelia-logo.png'
          ),
          new Post(
            'Node.js',
            'https://nodejs.org/en/',
            'A. A. Ron',
            'https://code-maven.com/img/node.png'
          ),
          new Post(
            'Pusher',
            'https://pusher.com/',
            'Alex',
            'https://avatars1.githubusercontent.com/u/739550?v=3&s=400'
          ),
          new Post(
            'Feathers.js',
            'http://feathersjs.com/',
            'Chuck',
            'https://cdn.worldvectorlogo.com/logos/feathersjs.svg'
          ),

        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #some {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  #logo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .search-wrapper {
    position: relative;
  }

  label {
    position: absolute;
    font-size: 12px;
    color: rgba(0, 0, 0, .50);
    top: 8px;
    left: 12px;
    z-index: -1;
    transition: .15s all ease-in-out;
  }

  input {
    padding: 4px 12px;
    color: rgba(0, 0, 0, .70);
    border: 1px solid rgba(0, 0, 0, .12);
    transition: .15s all ease-in-out;
    background: white;
  }

  wrapper {
    display: flex;
    max-width: 444px;
    flex-wrap: wrap;
    padding-top: 12px;
  }

  .hotpink {
    background: hotpink;
  }

  .green {
    background: green;
  }

  .box {
    width: 100px;
    height: 100px;
    border: 1px solid rgba(0, 0, 0, .12);
  }

  small {
    font-size: 10px;
    padding: 4px;
  }

  a {
    text-decoration: none;
    padding: 12px;
    color: #03A9F4;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 100px;
    height: 100px;
  }

  .card {
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    max-width: 124px;
    margin: 12px;
    transition: .15s all ease-in-out;
  }
</style>
