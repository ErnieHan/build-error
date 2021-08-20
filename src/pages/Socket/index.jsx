import React, { useEffect, useState, useRef } from 'react'
import './style.scss'
import MetaHead from '../../components/MetaHead'
import Stomp from 'stompjs'
// antd
import { Upload, message, Button } from 'antd'

let client

function Socket() {
  const [hasFile, setHasFile] = useState(false)
  const [imgUrl, setImgUrl] = useState('')
  const [file, setFile] = useState({ url: null, name: null })
  const uploader = useRef(null)

  useEffect(() => {
    const url = 'ws:127.0.0.1:61614/stomp'
    client = Stomp.client(url)
    client.debug = null
    const headers = {
      login: 'admin',
      passcode: 'password'
    }

    client.connect(headers, function (frame) {
      client.subscribe('/topic/message', function (response) {
        if (response.body) {
          const data = response.body
          alert(data)
        }
      })
    })
    const events = ['drop', 'dragover']
    events.forEach(name => {
      document.addEventListener(name, function (event) {
        event.preventDefault()
      })
    })
  }, [])

  function handleSend() {
    const destination = '/topic/test'
    const headers = {}
    const body = 'mitches'
    client.send(destination, headers, body)
  }

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io',
    headers: {
      authorization: 'authorization-text'
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    }
  }

  function handleUpload(e) {
    const file = e.target.files[0]
    handleFile(file)
  }

  function handleFile(file) {
    console.log('file:', file)
    if (file) {
      const { name } = file
      setHasFile(true)
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function (e) {
        const url = e.target.result
        const data = { url, name }
        setFile(data)
      }
    }
  }

  function handleClick() {
    uploader.current.click()
  }

  function handleDrag(e) {
    uploader.current.files = e.dataTransfer.files
    const file = e.dataTransfer.files[0]
    handleFile(file)
  }

  function downloadFiles() {
    if (file.url) {
      const a = document.createElement('a')
      a.href = file.url
      a.download = file.name
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    } else {
      alert('No files')
    }
  }

  return (
    <div className="socket-wrapper">
      <MetaHead title="Socket" />
      <div className="content">
        <p>Socket.jsx</p>
        <p>pokemon</p>
      </div>
      <button className="send-btn" onClick={handleSend}>
        Send Message
      </button>
      <div>
        <Upload {...props}>
          <Button>Click to Upload</Button>
        </Upload>
      </div>
      <div
        className="file-uploader-area"
        tabIndex="0"
        onClick={handleClick}
        onDrop={handleDrag}
      >
        <input
          id="file-uploader"
          className="file-uploader"
          type="file"
          multiple
          onChange={handleUpload}
          ref={uploader}
        />
        <p className="title">Click or drag file to this area to upload</p>
        {hasFile ? (
          <>
            {/* <img src={imgUrl} alt="" /> */}
            <p>檔案名稱:{file.name}</p>
            <p>檔案:{file.url}</p>
          </>
        ) : (
          <p className="sub-title">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        )}
      </div>
      <div>
        <button className="download-btn" onClick={downloadFiles}>
          Download Files 下載檔案
        </button>
      </div>
    </div>
  )
}

export default Socket
