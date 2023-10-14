export async function wait(time=1500){
  
    await new Promise(resolve=>
      setTimeout(()=> resolve(null)
      ,time)
    )
  }