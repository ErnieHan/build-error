import React, { useState, useRef, useEffect } from 'react'
import MetaHead from '../../components/MetaHead'
import './style.scss'
import XLSX from 'xlsx'

function Excel() {
  const platforms = [
    { name: 'Pchome', value: 'pchome' },
    { name: 'Pchome 24H', value: 'pchome24h' },
    { name: 'PayEasy', value: 'payeasy' }
  ]
  const pchomeKeys = {
    收貨人: 'receiverName',
    訂單編號: 'orderId',
    NO: 'orderNo',
    出貨單號: 'shippedId',
    確認: 'confirmedStatus',
    出貨日期: 'shippedDate',
    轉單日期: 'orderTransformedDate',
    預購日: 'perOrderedDate',
    ZIP: 'receiverZipCode',
    '收貨地址(訂單編號)': 'receiverAddress',
    收貨人電話: 'receiverPhone',
    商品名稱: 'productName',
    下訂時數量: 'orderQuantity',
    取消數量: 'cancelQuantity',
    應出貨數量: 'receiveQuantity',
    單位成本: 'productCost',
    成本小計: 'productTotalCost',
    商品規格: 'productSpec',
    廠商料號: 'thirdPartyProductId',
    備註: 'comment'
  }
  const pchome24hKeys = {
    備註: 'comment',
    單號確認日: 'confirmedDate',
    出貨日: 'shippedDate',
    轉單日期: 'orderTransformedDate',
    商品名稱: 'productName',
    商品ID: 'thirdPartyProductId',
    商品規格: 'productSpec',
    單位成本: 'productCost',
    實際出貨數量: 'quantity',
    成本小計: 'productTotalCost',
    訂購人: 'customerName',
    廠商料號: 'supplierProductId'
  }
  const payeasyKeys = {
    項次: 'itemNumber',
    組檔日期: 'orderTransformedDate',
    訂單編號: 'orderId',
    活動訂單: 'campaignOrderIndicator',
    商品銷售名稱: 'productName',
    商品流水號: 'productId',
    廠商商品原始碼: 'thirdPartyProductId',
    商品數量: 'quantity',
    帳款金額: 'productAmount',
    訂單貨款: 'productCost',
    收貨人: 'receiverName',
    郵遞區號: 'receiverZipCode',
    縣市別: 'receiverCity',
    收貨地址: 'receiverAddress',
    '電話(日)': 'receiverOfficePhone',
    '電話(夜)': 'receiverHomePhone',
    手機: 'receiverMobilePhone',
    備註: 'comment'
  }

  // states
  const [activePlatform, setActivePlatform] = useState('pchome')
  const [fileObject, setFileObject] = useState(null)
  // refs
  const uploader = useRef(null)

  useEffect(() => { }, [])

  function handlePlatform(event) {
    const { value } = event.target
    setActivePlatform(value)
    // 清空input files
    setFileObject(null)
    uploader.current.value = ''
  }

  function handleFiles(event) {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.readAsBinaryString(file)
      reader.onload = function (event) {
        const data = event.target.result
        const workbook = XLSX.read(data, { type: 'binary' })
        workbook.SheetNames.forEach(sheet => {
          let sheets = workbook.Sheets[sheet]
          if (activePlatform === 'pchome24h') {
            // 忽略第一行標題
            delete sheets['A1']
            const keys = Object.keys(sheets)
            const lastSheet = handleLastSheet(keys)
            sheets['!ref'] = `A2:${lastSheet}`
          }
          const array = []
          const row = XLSX.utils.sheet_to_row_object_array(sheets)
          row.forEach(element => {
            const options = Object()
            const keys = Object.keys(element)
            const lists = {
              pchome: pchomeKeys,
              pchome24h: pchome24hKeys,
              payeasy: payeasyKeys
            }
            keys.forEach(key => {
              const name = lists[activePlatform][key]
              const value = element[key]
              if (name) {
                options[name] = value
              } else {
                options[key] = value
              }
            })
            array.push(options)
          })
          setFileObject(array)
        })
      }
    }
  }

  async function handleSubmit() {
    if (fileObject) {
      try {
        const response = await fetch(
          `/shopping/v2/thirdParty/orders/${activePlatform}`,
          {
            method: 'POST',
            body: JSON.stringify(fileObject),
            credentials: 'include'
          }
        )
      } catch (error) {
        console.error(error)
      }
    } else {
      alert('no files')
    }
  }

  function handleLastSheet(keys) {
    // Step 1 : 移除!ref
    const isRef = keys.findIndex(key => key === '!ref')
    keys.splice(isRef, 1)
    // Step 2 : 所有keys組合成一個字串
    const texts = keys.join('')
    // Step 3 : 將字串一個字一個字分隔並分類為字母/數字兩類
    const numbers = []
    const letters = []
    for (var i = 0; i < texts.length; i++) {
      const isNumber = new RegExp('^[0-9]*$')
      const isLetter = new RegExp('^[A-Za-z]+$')
      const text = texts.substr(i, 1)
      if (isLetter.test(text)) {
        letters.push(text)
        letters.sort()
      } else if (isNumber.test(text)) {
        numbers.push(text)
        numbers.sort()
      }
    }
    // Step 4 : 排序陣列,取得最大值
    const maxNumber = numbers[numbers.length - 1]
    const maxLetter = letters[letters.length - 1]
    const lastSheet = maxLetter + maxNumber
    return lastSheet
  }

  return (
    <div className="excel-wrap">
      <MetaHead title="Excel Uploader" />
      <div className="uploader-wrap">
        <p className="title">Click or drag file to this area to upload</p>
        <p className="hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
        <input
          type="file"
          id="uploader"
          className="uploader"
          ref={uploader}
          accept=".xls, .xlsx, .csv"
          onChange={handleFiles}
        />
      </div>
      <div className="selection-wrap">
        <p className="sub-title">請選擇檔案來源平台</p>
        <select
          className="selection"
          value={activePlatform}
          onChange={handlePlatform}
        >
          {platforms.map((data, index) => (
            <option key={index} value={data.value}>
              {data.name}
            </option>
          ))}
        </select>
      </div>

      <div className="buttons-wrap">
        <pre className="json-preview-content">
          {JSON.stringify(fileObject, false, 2)}
        </pre>
        <button
          className={`submit-btn ${fileObject ? '' : 'disabled'}`}
          onClick={handleSubmit}
        >
          提交資料
        </button>
      </div>
      <div>scrolling components</div>
    </div>
  )
}

export default Excel
