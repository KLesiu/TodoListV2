import { ListFetchingError } from "./list-fetch-error.type"
type initial = {
    state: 'init'
  }
  type loading= {
    state: "loading"
  }
  type success<T>={
    state: 'success'
    results:T[]
  }
  type error={
    state:'error'
    error: ListFetchingError
  }
  export type ComponentListState<T>=initial|loading|success<T>|error