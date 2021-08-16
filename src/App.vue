<template>
  <div>
    <h1> Rick And Morty </h1>
    <FilterByStatus/>
    <ListCharacters/>
    </div>
</template>

<script>

import ListCharacters from '@/components/ListCharacters'
import FilterByStatus from '@/components/FilterByStatus'
export default {
  name: 'App',
  components: {
    ListCharacters,
    FilterByStatus
    
  }
}
</script>

<style lang="scss">
  
  :root{
    --background-body: #24282f;
    --background-card: #4f5053;
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
    background-color: var(--background-body);
    color: var(--text-white);
  }
</style>
