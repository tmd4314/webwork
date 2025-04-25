import { createMemoryHistory, createRouter } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import MemberForm from '../views/MemberForm.vue'
import Emp from '../views/Emp.vue';
import Todo from '../views/Todo.vue';
import Movie from '../views/Movie.vue';
import Param from '../views/ParamView.vue'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/memberForm', component: MemberForm },
  { path: '/emp', component: Emp },
  { path: '/movie', component: Movie },
  { path: '/todo', component: Todo },
  { path: '/param/:username', component: Param }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;