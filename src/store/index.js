import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    charactersFilters: []
  },
  mutations: {
    setCharacters(state, payLoad){
      state.characters = payLoad
    },
    setCharactersFilters(state, payLoad){
      state.charactersFilters = payLoad
    }
  },
  actions: {
    async getCharacters({commit}){
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        commit('setCharacters', data.results)
        commit('setCharactersFilters', data.results)
      } catch (error) {
        console.error(error)
      }
    },
    filterByStatus({commit, state}, status){
      const results = state.characters.filter((character)=>{
        return character.status.includes(status)
      })
      commit('setCharactersFilters', results)
    },
    filterByName({commit, state}, name){
      const formatName = name.toLowerCase()
      const results = state.characters.filter((character)=>{
        const characterName = character.name.toLowerCase()

        if(characterName.includes(formatName)){
          return character
        }
      })
      commit('setCharactersFilters', results)
    }
  },
  modules: {
  }
})
