<template>
  <div>
    <h1> Rick And Morty </h1>
    <listCharacters/>
    </div>
</template>

<script>

import listCharacters from '@/components/ListCharacters'
export default {
  name: 'App',
  components: {
    listCharacters
    
  }
}
</script>

<style lang="scss">
  
  :root{
    --backgroung-body: #24282f;
    --backgroud-card: #3c3e44;
    --text-white: #ffffff;
    --text-agray: #c0c0c0;
    --text-orange: #ff9800;
  }
  *{
    box-sizing: border-box;
    margin: 0;
    padding:0;

  }
  body{
    background-color: var(--backgroung-body);
    color: var(--text-white);
  }
</style>
