import React, { useState, useEffect } from 'react'
import './style.scss'
import errorImage from '../../../assets/stick-1.png'

export default function Cards() {
  const items = {
    pageInfo: {
      rowCount: 1280,
      inventoryCount: 100
    },
    catalogItems: [
      {
        code: '91537B-24KG-00',
        modelNumber: '91537B-24KG-00',
        brand: null,
        collection: null,
        subCollection: null,
        productName: '999.9黃金手鍊',
        productName1:
          'Murano Glass 彩色玻璃珠組合Murano Glass 彩色玻璃珠組合Murano Glass 彩色玻璃珠組合',
        productName2: null,
        sizeSet: null,
        styleSet: null,
        productLifeCycle: {
          description: '新款',
          referenceCode: 'P',
          status: 'A'
        },
        usage: {
          description: '手鍊',
          referenceCode: 'B',
          status: 'A'
        },
        goldType: {
          description: '999.9黃金',
          referenceCode: '24KG',
          status: 'A'
        },
        materialCategory: null,
        priceRange: {
          min: {
            currency: 'HKD',
            price: 270
          },
          max: {
            currency: 'MOP',
            price: 280
          }
        },
        stockInfo: {
          offlineAvailable: true,
          onlineAvailable: true,
          totalStockCount: 68
        },
        isPersonalizationByCatalogItem: true,
        images: {
          imagePath:
            'https://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/91537/86474dab7781d55dcd38948f7eea474e.jpg',
          originalCatalogItemCode: null,
          originalCatalogItemName: null
        },
        obsoleted: true
      },
      {
        code: '91522C-24GG-00',
        modelNumber: '91537B-24KG-00-91537B',
        brand: null,
        collection: {
          code: 'C446',
          description: 'Charme',
          status: 'A'
        },
        subCollection: {
          code: 'S0530',
          description: '星運神話系列',
          status: 'A'
        },
        productName: '999黃金串飾',
        productName1: 'Charme',
        productName2: '星運神話系列',
        sizeSet: null,
        styleSet: null,
        productLifeCycle: {
          description: '新款',
          referenceCode: 'P',
          status: 'A'
        },
        usage: {
          description: '串飾',
          referenceCode: 'C',
          status: 'A'
        },
        goldType: {
          description: '999黃金',
          referenceCode: '24GG',
          status: 'A'
        },
        materialCategory: null,
        priceRange: {
          min: {
            currency: 'HKD',
            price: 2000
          },
          max: {
            currency: 'HKD',
            price: 2800
          }
        },
        stockInfo: {
          offlineAvailable: true,
          onlineAvailable: true,
          totalStockCount: 1648
        },
        isPersonalizationByCatalogItem: false,
        images: {
          imagePath:
            'https://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/91509/27.jpg',
          originalCatalogItemCode: null,
          originalCatalogItemName: null
        },
        charmeTypes: [
          {
            description: 'description',
            referenceCode: 'CHARMEXL',
            status: 'status'
          }
        ]
      },
      {
        code: '91509B-24GG-00',
        brand: null,
        collection: {
          code: 'C446',
          description: 'Charme',
          status: 'A'
        },
        subCollection: {
          code: 'S0540',
          description: 'Murano Glass 彩色玻璃珠組合',
          status: 'A'
        },
        productName: '999黃金手鍊',
        productName1: 'Charme',
        productName2: 'Murano Glass 彩色玻璃珠組合',
        sizeSet: {
          description: 'string',
          id: 0,
          relatedReferenceType: 'string',
          relatedReferenceCode: 'string',
          tag: 'string'
        },
        styleSet: {
          description: '男戒 88051 / 女戒 88052',
          id: 65,
          relatedReferenceCode: 'MALEFEMALE',
          relatedReferenceType: 'T74',
          tag: '男女'
        },
        productLifeCycle: {
          description: '新款',
          referenceCode: 'P',
          status: 'A'
        },
        usage: {
          description: '手鍊',
          referenceCode: 'B',
          status: 'A'
        },
        goldType: {
          description: '999黃金',
          referenceCode: '24GG',
          status: 'A'
        },
        materialCategory: null,
        priceRange: {
          min: {
            currency: 'HKD',
            price: 2150
          },
          max: {
            currency: 'NTD',
            price: 11100
          }
        },
        stockInfo: {
          offlineAvailable: true,
          onlineAvailable: true,
          totalStockCount: 2184
        },
        isPersonalizationByCatalogItem: false,
        images: {
          imagePath:
            'https://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/91509/2742406b216a5130e720afd7af39966c.jpg',
          originalCatalogItemCode: null,
          originalCatalogItemName: null
        },
        charmeTypes: [
          {
            description: 'description',
            referenceCode: 'CHARMEMINI',
            status: 'status'
          }
        ]
      },
      {
        code: '91505C-24GG-00',
        brand: null,
        collection: {
          code: 'C446',
          description: 'Charme',
          status: 'A'
        },
        subCollection: {
          code: 'S0531',
          description: '文化祝福系列',
          status: 'A'
        },
        productName: '999黃金串飾',
        productName1: 'Charme',
        productName2: '文化祝福系列',
        sizeSet: null,
        styleSet: null,
        productLifeCycle: {
          description: '新款',
          referenceCode: 'P',
          status: 'A'
        },
        usage: {
          description: '串飾',
          referenceCode: 'C',
          status: 'A'
        },
        goldType: {
          description: '999黃金',
          referenceCode: '24GG',
          status: 'A'
        },
        materialCategory: null,
        priceRange: {
          min: {
            currency: 'CNY',
            price: 1820
          },
          max: {
            currency: 'NTD',
            price: 8700
          }
        },
        stockInfo: {
          offlineAvailable: true,
          onlineAvailable: true,
          totalStockCount: 1725
        },
        isPersonalizationByCatalogItem: false,
        images: {
          imagePath:
            'https://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/91505/e15049cb64c7dfe3f73ba1a97e0bb367.jpg',
          originalCatalogItemCode: null,
          originalCatalogItemName: null
        }
      },
      {
        code: '91504C-24GG-00',
        brand: null,
        collection: {
          code: 'C446',
          description: 'Charme',
          status: 'A'
        },
        subCollection: {
          code: 'S0531',
          description: '文化祝福系列',
          status: 'A'
        },
        productName: '999黃金串飾',
        productName1: 'Charme',
        productName2: '文化祝福系列',
        sizeSet: null,
        styleSet: null,
        productLifeCycle: {
          description: '新款',
          referenceCode: 'P',
          status: 'A'
        },
        usage: {
          description: '串飾',
          referenceCode: 'C',
          status: 'A'
        },
        goldType: {
          description: '999黃金',
          referenceCode: '24GG',
          status: 'A'
        },
        materialCategory: null,
        priceRange: {
          min: {
            currency: 'HKD',
            price: 1270
          },
          max: {
            currency: 'HKD',
            price: 8000
          }
        },
        stockInfo: {
          offlineAvailable: true,
          onlineAvailable: true,
          totalStockCount: 1943
        },
        isPersonalizationByCatalogItem: false,
        images: {
          imagePath:
            'https://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/91504/9cd7f113eaa8d5fbe54553bfbe120c63.jpg',
          originalCatalogItemCode: null,
          originalCatalogItemName: null
        }
      },
      {
        code: '91503C-24GG-00',
        brand: null,
        collection: {
          code: 'C446',
          description: 'Charme',
          status: 'A'
        },
        subCollection: {
          code: 'S0531',
          description: '文化祝福系列',
          status: 'A'
        },
        productName: '999黃金串飾',
        productName1: 'Charme',
        productName2: '文化祝福系列',
        sizeSet: null,
        styleSet: null,
        productLifeCycle: {
          description: '新款',
          referenceCode: 'P',
          status: 'A'
        },
        usage: {
          description: '串飾',
          referenceCode: 'C',
          status: 'A'
        },
        goldType: {
          description: '999黃金',
          referenceCode: '24GG',
          status: 'A'
        },
        materialCategory: null,
        priceRange: {
          min: {
            currency: 'HKD',
            price: 1650
          },
          max: {
            currency: 'NTD',
            price: 8700
          }
        },
        stockInfo: {
          offlineAvailable: true,
          onlineAvailable: true,
          totalStockCount: 1064
        },
        isPersonalizationByCatalogItem: false,
        images: {
          imagePath:
            'https://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/91503/d4610be1264b44fa0259218c78f3d207.jpg',
          originalCatalogItemCode: null,
          originalCatalogItemName: null
        }
      },
      {
        code: '91502C-24GG-00',
        brand: null,
        collection: {
          code: 'C446',
          description: 'Charme',
          status: 'A'
        },
        subCollection: {
          code: 'S0531',
          description: '文化祝福系列',
          status: 'A'
        },
        productName: '999黃金串飾',
        productName1: 'Charme',
        productName2: '文化祝福系列',
        sizeSet: null,
        styleSet: null,
        productLifeCycle: {
          description: '新款',
          referenceCode: 'P',
          status: 'A'
        },
        usage: {
          description: '串飾',
          referenceCode: 'C',
          status: 'A'
        },
        goldType: {
          description: '999黃金',
          referenceCode: '24GG',
          status: 'A'
        },
        materialCategory: null,
        priceRange: {
          min: {
            currency: 'HKD',
            price: 1650
          },
          max: {
            currency: 'NTD',
            price: 8700
          }
        },
        stockInfo: {
          offlineAvailable: true,
          onlineAvailable: true,
          totalStockCount: 1490
        },
        isPersonalizationByCatalogItem: false,
        images: {
          imagePath:
            'https://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/91502/b566dc175fc01146dce3c1a181c3b153.jpg',
          originalCatalogItemCode: null,
          originalCatalogItemName: null
        }
      },
      {
        code: '91476B-P950-00',
        brand: null,
        collection: null,
        subCollection: null,
        productName: '950鉑金手鍊',
        productName1: '-',
        productName2: null,
        sizeSet: null,
        styleSet: null,
        productLifeCycle: {
          description: '常規款',
          referenceCode: 'R',
          status: 'A'
        },
        usage: {
          description: '手鍊',
          referenceCode: 'B',
          status: 'A'
        },
        goldType: {
          description: '950鉑金',
          referenceCode: 'P950',
          status: 'A'
        },
        materialCategory: null,
        priceRange: {
          min: {
            currency: 'CNY',
            price: 360
          },
          max: {
            currency: 'MOP',
            price: 560
          }
        },
        stockInfo: {
          offlineAvailable: true,
          onlineAvailable: true,
          totalStockCount: 41
        },
        isPersonalizationByCatalogItem: false,
        images: {
          imagePath:
            'https://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/91476/1174680f56ce821c56d1cf07abac0a08.jpg',
          originalCatalogItemCode: null,
          originalCatalogItemName: null
        }
      },
      {
        code: '91463B-18KW-DD',
        brand: {
          code: 'EMP',
          description: 'EMPHASIS',
          status: 'A'
        },
        collection: null,
        subCollection: {
          code: 'S0661',
          description: 'Form',
          status: 'A'
        },
        productName: '18K白色黃金鑽石手鍊',
        productName1: 'EMPHASIS',
        productName2: 'Form',
        sizeSet: null,
        styleSet: null,
        productLifeCycle: {
          description: '常規款',
          referenceCode: 'R',
          status: 'A'
        },
        usage: {
          description: '手鍊',
          referenceCode: 'B',
          status: 'A'
        },
        goldType: {
          description: '18K白色黃金',
          referenceCode: '18KW',
          status: 'A'
        },
        materialCategory: {
          description: '鑽石',
          referenceCode: 'DD',
          status: 'A'
        },
        priceRange: {
          min: {
            currency: 'CNY',
            price: 5900
          },
          max: {
            currency: 'CNY',
            price: 5900
          }
        },
        stockInfo: {
          offlineAvailable: true,
          onlineAvailable: true,
          totalStockCount: 53
        },
        isPersonalizationByCatalogItem: false,
        images: {
          imagePath:
            'https://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/91463/88194fb701ad920284f6bb814d6ca592.jpg',
          originalCatalogItemCode: null,
          originalCatalogItemName: null
        }
      },
      {
        code: '91440C-24GG-00',
        brand: null,
        collection: {
          code: 'C446',
          description: 'Charme',
          status: 'A'
        },
        subCollection: {
          code: 'S0526',
          description: '可愛系列',
          status: 'A'
        },
        productName: '999黃金串飾',
        productName1: 'Charme',
        productName2: '可愛系列',
        sizeSet: null,
        styleSet: null,
        productLifeCycle: {
          description: '常規款',
          referenceCode: 'R',
          status: 'A'
        },
        usage: {
          description: '串飾',
          referenceCode: 'C',
          status: 'A'
        },
        goldType: {
          description: '999黃金',
          referenceCode: '24GG',
          status: 'A'
        },
        materialCategory: null,
        priceRange: {
          min: {
            currency: 'HKD',
            price: 1650
          },
          max: {
            currency: 'NTD',
            price: 8700
          }
        },
        stockInfo: {
          offlineAvailable: true,
          onlineAvailable: true,
          totalStockCount: 3101
        },
        isPersonalizationByCatalogItem: false,
        images: {
          imagePath:
            'https://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/91440/b7283ccb40e3989f11fc050d9741524b.jpg',
          originalCatalogItemCode: null,
          originalCatalogItemName: null
        }
      },
      {
        code: '91439C-24GG-00',
        brand: null,
        collection: {
          code: 'C446',
          description: 'Charme',
          status: 'A'
        },
        subCollection: {
          code: 'S0526',
          description: '可愛系列',
          status: 'A'
        },
        productName: '999黃金串飾',
        productName1: 'Charme',
        productName2: '可愛系列',
        sizeSet: null,
        styleSet: null,
        productLifeCycle: {
          description: '常規款',
          referenceCode: 'R',
          status: 'A'
        },
        usage: {
          description: '串飾',
          referenceCode: 'C',
          status: 'A'
        },
        goldType: {
          description: '999黃金',
          referenceCode: '24GG',
          status: 'A'
        },
        materialCategory: null,
        priceRange: {
          min: {
            currency: 'HKD',
            price: 1650
          },
          max: {
            currency: 'NTD',
            price: 8700
          }
        },
        stockInfo: {
          offlineAvailable: true,
          onlineAvailable: true,
          totalStockCount: 3434
        },
        isPersonalizationByCatalogItem: false,
        images: {
          imagePath:
            'https://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/91439/0215a78a1e854aba8b5bb7d743655fb6.jpg',
          originalCatalogItemCode: null,
          originalCatalogItemName: null
        }
      },
      {
        code: '91403C-24GG-00',
        brand: {
          code: 'SR',
          description: 'Sanrio',
          status: 'A'
        },
        collection: {
          code: 'C508',
          description: 'Kuromi',
          status: 'A'
        },
        subCollection: {
          code: 'S0600',
          description: 'Kuromi',
          status: 'A'
        },
        productName: '999黃金串飾',
        productName1: 'Sanrio',
        productName2: 'Kuromi(Kuromi)',
        sizeSet: null,
        styleSet: null,
        productLifeCycle: {
          description: '新款',
          referenceCode: 'P',
          status: 'A'
        },
        usage: {
          description: '串飾',
          referenceCode: 'C',
          status: 'A'
        },
        goldType: {
          description: '999黃金',
          referenceCode: '24GG',
          status: 'A'
        },
        materialCategory: null,
        priceRange: {
          min: {
            currency: 'HKD',
            price: 1800
          },
          max: {
            currency: 'HKD',
            price: 2550
          }
        },
        stockInfo: {
          offlineAvailable: true,
          onlineAvailable: true,
          totalStockCount: 79
        },
        isPersonalizationByCatalogItem: false,
        images: {
          imagePath:
            'https://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/91403/8c291f561997861fd5f62513890d0ee4.jpg',
          originalCatalogItemCode: null,
          originalCatalogItemName: null
        }
      }
    ]
  }
  const sortOptions = [
    { name: '價格由高至低', direction: 'asc', value: 'asc-price' },
    { name: '價格由低至高', direction: 'diff', value: 'diff-price' }
  ]
  // states
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(0)
  const [group, setGroup] = useState(10)

  useEffect(() => {
    const data = groupProducts(items.catalogItems, group)
    setProducts(data)
  }, [])

  function groupProducts(products, group) {
    const array = []
    for (var i = 0; i < products.length; i += group) {
      array.push(products.slice(i, i + group))
    }
    return array
  }

  function handlePage(e) {
    const page = Number(e.target.value)
    setPage(page)
  }

  function handleGroup(e) {
    const group = Number(e.target.value)
    setGroup(group)
    const products = groupProducts(items.catalogItems, group)
    setProducts(products)
    setPage(0)
  }

  function handleError(e) {
    e.target.src = errorImage
  }

  function formatPrice(text) {
    const rules = new RegExp('^[0-9]*$')
    const numbers = []
    const currencies = []
    for (var i = 0; i < text.length; i++) {
      const letter = text.substr(i, 1)
      if (rules.test(letter)) {
        numbers.push(letter)
      } else {
        currencies.push(letter)
      }
    }
    const price = Number(numbers.join('')).toLocaleString()
    const currency = currencies.join('')
    return currency + price
  }

  function handleSorting(e) {
    const { value } = e.target
    console.log(value)
  }

  return (
    <>
      <div className="pagination-wrapper">
        <p>{formatPrice('NTD 219600')}</p>
        <select value={page} onChange={handlePage}>
          <option value={0}>第 1 頁</option>
          <option value={1}>第 2 頁</option>
        </select>
        <select value={group} onChange={handleGroup}>
          <option value={5}>5筆</option>
          <option value={10}>10筆</option>
          <option value={20}>20筆</option>
        </select>
        <select onChange={handleSorting}>
          <option>排序方式</option>
          {sortOptions.map((data, index) => (
            <option value={data.value} key={index}>
              {data.name}
            </option>
          ))}
        </select>
      </div>
      <div className="cards-wrapper">
        {products[page] &&
          Array.isArray(products[page]) &&
          products[page].map((data, index) => (
            <div key={index} className="card-outline">
              <div className="card-content">
                {data.isPersonalizationByCatalogItem && (
                  <div className="card-diy-tag">訂製商品</div>
                )}
                <a className="card-head" href="/">
                  <div className="head-box">
                    <img
                      src={data.images.imagePath}
                      alt=""
                      onError={handleError}
                    />
                  </div>
                </a>
                <div className="card-body">
                  <p className="code">{data.code}</p>
                  <p className="brand">{data.productName1 || '-'}</p>
                  <p className="name2">{data.productName2 || '-'}</p>
                  <p className="name">{data.productName || '-'}</p>
                  <p className="price">NTD$7,310 - NTD$9,320</p>
                  <p>P / 46</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}
