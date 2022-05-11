<template>
    <div>
        <nav class="header__nav" :class="{ 'show': showMobileMenu }">
            <ul>
                <li v-for="(link, index) in navLinks"
                    :key="index"
                >
                    <a :href="link.href">{{link.name}}</a>
                </li>
            </ul>
        </nav>

        <img src="../../../resources/img/menu.svg" class="menu-mobile" @click="showMenu()" alt="">
    </div>
</template>

<script>
    export default {
        name: "AppHeaderNav",
        props: ['authcheck'],
        data(){
          return{
              navLinks: [
                  {name: 'Ищу работу', href: '/jobs'},
                  {name: 'Ищу сотрудников', href: '/resumes'},
                  {name: 'Помощь', href: '/faq'},
                  {name: 'Компании', href: '/companies'},
              ],
              showMobileMenu: false,
          }
        },
        methods: {
            showMenu(){
                this.showMobileMenu = !this.showMobileMenu;
            }
        }
    }
</script>
