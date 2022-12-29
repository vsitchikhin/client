<template>
  <div class="mobile-menu">
    <div class="mobile-menu__home" @click="gotoHome">
      <svg class="feather feather-home mobile-menu__home-icon" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    </div>
    <div class="mobile-menu__catalog" @click="gotoCatalog">
      <svg enable-background="new 0 0 91 91" class="mobile-menu__catalog-icon" height="91px" id="Layer_1" version="1.1" viewBox="0 0 91 91" width="91px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g><rect height="3.4" width="30.602" x="36.891" y="31.362"/><rect height="3.4" width="30.602" x="36.891" y="44.962"/><rect height="3.4" width="30.602" x="36.891" y="58.562"/><path d="M27.594,36.462c1.877,0,3.398-1.522,3.398-3.4c0-1.877-1.521-3.399-3.398-3.399h-0.02c-1.877,0-3.391,1.522-3.391,3.399   C24.184,34.939,25.715,36.462,27.594,36.462z"/><path d="M27.594,50.062c1.877,0,3.398-1.521,3.398-3.399s-1.521-3.399-3.398-3.399h-0.02c-1.877,0-3.391,1.521-3.391,3.399   S25.715,50.062,27.594,50.062z"/><path d="M27.594,63.662c1.877,0,3.398-1.522,3.398-3.399c0-1.879-1.521-3.4-3.398-3.4h-0.02c-1.877,0-3.391,1.521-3.391,3.4   C24.184,62.14,25.715,63.662,27.594,63.662z"/></g></svg>
    </div>
    <div class="mobile-menu__records" @click="gotoRecords">
      <svg class="mobile-menu__records-icon" id="icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><path d="M26,2H8A2,2,0,0,0,6,4V8H4v2H6v5H4v2H6v5H4v2H6v4a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V4A2,2,0,0,0,26,2Zm0,26H8V24h2V22H8V17h2V15H8V10h2V8H8V4H26Z" transform="translate(0 0)"/><rect height="2" width="8" x="14" y="8"/><rect height="2" width="8" x="14" y="15"/><rect height="2" width="8" x="14" y="22"/><rect class="cls-1" data-name="&lt;Transparent Rectangle&gt;" height="32" id="_Transparent_Rectangle_" width="32"/></svg>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {useRouter} from 'vue-router';

  const router = useRouter();

  function gotoHome() {
      router.push({path: '/'});
  }

  function gotoRecords() {
    router.push({path: '/records'});
  }

  function gotoCatalog() {
    router.push({path: '/catalog'});
  }

</script>

<style scoped lang="scss">
  @import 'src/css/quasar.variables.scss';


  .mobile-menu {
    min-height: 44px;
    max-height: 60px;
    background-color: $background-menu;
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: $primary;
    fill: $primary;

    &__home,
    &__catalog,
    &__records {
      cursor: pointer;
    }


    &__home-icon,
    &__records-icon {
      width: 28px;
      height: 28px;
      margin-top: 14px;
    }

    &__records-icon {
      margin-right: 20px;
    }

    &__home-icon {
      margin-left: 20px;
    }

    &__catalog-icon {
      margin-top: 4px;
      width: 48px;
      height: 48px;
    }
  }

  .cls-1 {
    fill: none;
  }
</style>
