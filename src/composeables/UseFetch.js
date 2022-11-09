import {ref, reactive, toRefs} from 'vue'

export function useFetch(url, options){
  const data = ref(null)
  const state = reactive( {
    error:null,
    loading:false
  }) 

  const fetchData = async() => {
    console.log("...Fetching data...");
    state.loading = true
    try{
      const result = await fetch(url, options)
      data.value = await result.json()
    }
    catch(e){
      state.error = e
    }
    finally{
      state.loading = false     
    }
  }
  fetchData();

  console.log('data: ' + data.value);
  return {data, ...toRefs(state)}
}