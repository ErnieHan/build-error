import Stomp from 'stompjs'

export const Socket = function () {
  this.init = function () {
    const url = 'ws:127.0.0.1:61614/stomp'
    const client = Stomp.client(url)
    client.debug = false
    const headers = {
      login: 'admin',
      passcode: 'admin'
    }

    client.connect(headers, function (frame) {
      client.subscribe('/topic/message', function (response) {
        alert(response.body)
      })
    })
  }
}
