 
 <template>
 <div>
    <Alert v-if="alert" v-bind:message="alert"/>
    <h1>{{ quiz.title }}</h1>
    <div v-for="(question, index) in quiz.questions">
      <div v-show="index === questionIndex">
        <h2>{{ question.text }}</h2>
        <ol>
          <li v-for="response in question.responses">
            <label>
              <!-- The radio button has three new directives -->
              <!-- v-bind:value sets "value" to "true" if the response is correct -->
              <!-- v-bind:name sets "name" to question index to group answers by question -->
              <!-- v-model creates binding with userResponses -->
              <input type="radio" 
                     v-bind:value="response.correct" 
                     v-bind:name="index" 
                     v-model="userResponses[index]"> {{response.text}}
            </label>
          </li>
        </ol>
        <button v-if="questionIndex > 0" v-on:click="prev">
          prev
        </button>
        <button v-on:click="next">
          next
        </button>
      </div>
    </div>
    <div v-show="questionIndex === quiz.questions.length">
      <h2>
      Quiz finished
    </h2>
      <p>
        Total score: {{ score() }} / {{ quiz.questions.length }}
      </p>
    </div>
 </div>
</template>
 
<script>
    var quiz = {
    title: 'My test Quiz',
    questions: [
        {
        text: "Stab Question 1",
        responses: [
            {text: 'Wrong, too bad.'}, 
            {text: 'Right!', correct: true}, 
        ]
        }, {
        text: "Stab Question 2",
        responses: [
            {text: 'Right answer', correct: true}, 
            {text: 'Wrong answer, to bad'}, 
        ]
        } 
    ]
    };
        
  import Alert from '../Alert'

  export default {
    name: 'quiz',
    data () {
      return {
        quiz: quiz,
        questionIndex: 0,
        userResponses: Array(quiz.questions.length).fill(false),
        alert: '',
        someWatchedObject: {
          someWatchedPropery: '',
          someOneMoreWatchedProperty: ''
        }
      }
    },
     watch: {
        questionIndex(newValue, oldValue) {
          if(this.userResponses.length >= newValue + 1){
            this.alert = "Question number: " + (newValue + 1);
          } else {
            this.alert ='';
          }
        },
       //Object watcher example (not Used)
        someWatchedObject: {
            handler(newVal, oldVal) {
                // triggered when anything is changed within the Object
                this.alert = "Property of object someWathedObject changed to:" + newVal;
            },
            deep: true
        }
    
    },
    methods: {
        next: function() {
        this.questionIndex++;
        },
        prev: function() {
        this.questionIndex--;
        },
        score: function() {
        return this.userResponses.filter(function(val) { return val }).length;
        }
    },
    components: {
      Alert
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>