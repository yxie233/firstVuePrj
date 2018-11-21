import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import Posts from '@/components/Posts'
import NewPost from '@/components/NewPost'
import EditPost from '@/components/EditPost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/show',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/show/posts/new',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/show/posts/:id',
      name: 'EditPost',
      component: EditPost
    }
  ]
})