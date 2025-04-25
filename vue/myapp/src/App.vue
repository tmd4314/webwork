<script>
// import GoodsView from './components/goods.vue';
// import MemberForm from './views/MemberForm.vue';


// export default {
//   components:{GoodsView, MemberForm, Emp, Movie, Todo},
//   data(){
//     return{
//       fruits : ["사과", "바나나", "포도"],
//       message:"greeting"
//     }
//   },
//   methods: {}
// }
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="container">
    <div class="alert alert-primary" role="alert">
      <h1>Hello App!</h1>
      <p>
        <strong>Current route path:</strong> {{ $route.fullPath }}
      </p>
    </div>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link active" aria-current="page">Home</RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink to="/memberForm" class="nav-link active" aria-current="page">회원가입</RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink to="/emp" class="nav-link active" aria-current="page">EMP</RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink to="/movie" class="nav-link active" aria-current="page">Movie</RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink to="/todo" class="nav-link active" aria-current="page">Todo</RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink to="/todo" class="nav-link active" aria-current="page">Todo</RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink to="/param/Kim" class="nav-link" aria-current="page">Param1</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/param/Min" class="nav-link" aria-current="page">Param2</RouterLink>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>