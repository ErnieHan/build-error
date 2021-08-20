export const User = function () {
  // init
  this.init = async function () {
    try {
      const response = await fetch(
        'http://localhost:3031/earring-style-lists',
        {
          method: 'GET'
        }
      )
      if (response.ok) {
        const result = await response.json()
        console.log('result:', result)
      } else {
        throw new Error('GET_USER_FAILED')
      }
    } catch (error) {
      console.error(error)
    }
  }
}
