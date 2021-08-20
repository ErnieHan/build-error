const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const postResponse = require(path.join(__dirname, 'postResponse.js'))
const routes = require(path.join(__dirname, 'routes.json'))
const domain = 'http://localhost:3535'

server.post('/rest/pcms3/v1/catalogItems/search', function (req, res) {
  res.header('Access-Control-Allow-Origin', domain)
  res.header('Access-Control-Allow-Credentials', 'true')
  res.status(200).jsonp({
    pageInfo: { rowCount: 1280, inventoryCount: 100 },
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
        usage: { description: '手鍊', referenceCode: 'B', status: 'A' },
        goldType: {
          description: '999.9黃金',
          referenceCode: '24KG',
          status: 'A'
        },
        materialCategory: null,
        priceRange: {
          min: { currency: 'HKD', price: 270 },
          max: { currency: 'MOP', price: 280 }
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
        collection: { code: 'C446', description: 'Charme', status: 'A' },
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
        usage: { description: '串飾', referenceCode: 'C', status: 'A' },
        goldType: {
          description: '999黃金',
          referenceCode: '24GG',
          status: 'A'
        },
        materialCategory: null,
        priceRange: {
          min: { currency: 'HKD', price: 2000 },
          max: { currency: 'HKD', price: 2800 }
        },
        stockInfo: {
          offlineAvailable: true,
          onlineAvailable: true,
          totalStockCount: 1648
        },
        isPersonalizationByCatalogItem: false,
        images: {
          imagePath: null,
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
        collection: { code: 'C446', description: 'Charme', status: 'A' },
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
        usage: { description: '手鍊', referenceCode: 'B', status: 'A' },
        goldType: {
          description: '999黃金',
          referenceCode: '24GG',
          status: 'A'
        },
        materialCategory: null,
        priceRange: {
          min: { currency: 'HKD', price: 2150 },
          max: { currency: 'NTD', price: 11100 }
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
        collection: { code: 'C446', description: 'Charme', status: 'A' },
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
        usage: { description: '串飾', referenceCode: 'C', status: 'A' },
        goldType: {
          description: '999黃金',
          referenceCode: '24GG',
          status: 'A'
        },
        materialCategory: null,
        priceRange: {
          min: { currency: 'CNY', price: 1820 },
          max: { currency: 'NTD', price: 8700 }
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
        collection: { code: 'C446', description: 'Charme', status: 'A' },
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
        usage: { description: '串飾', referenceCode: 'C', status: 'A' },
        goldType: {
          description: '999黃金',
          referenceCode: '24GG',
          status: 'A'
        },
        materialCategory: null,
        priceRange: {
          min: { currency: 'HKD', price: 1270 },
          max: { currency: 'HKD', price: 8000 }
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
        collection: { code: 'C446', description: 'Charme', status: 'A' },
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
        usage: { description: '串飾', referenceCode: 'C', status: 'A' },
        goldType: {
          description: '999黃金',
          referenceCode: '24GG',
          status: 'A'
        },
        materialCategory: null,
        priceRange: {
          min: { currency: 'HKD', price: 1650 },
          max: { currency: 'NTD', price: 8700 }
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
        collection: { code: 'C446', description: 'Charme', status: 'A' },
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
        usage: { description: '串飾', referenceCode: 'C', status: 'A' },
        goldType: {
          description: '999黃金',
          referenceCode: '24GG',
          status: 'A'
        },
        materialCategory: null,
        priceRange: {
          min: { currency: 'HKD', price: 1650 },
          max: { currency: 'NTD', price: 8700 }
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
        usage: { description: '手鍊', referenceCode: 'B', status: 'A' },
        goldType: {
          description: '950鉑金',
          referenceCode: 'P950',
          status: 'A'
        },
        materialCategory: null,
        priceRange: {
          min: { currency: 'CNY', price: 360 },
          max: { currency: 'MOP', price: 560 }
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
        brand: { code: 'EMP', description: 'EMPHASIS', status: 'A' },
        collection: null,
        subCollection: { code: 'S0661', description: 'Form', status: 'A' },
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
        usage: { description: '手鍊', referenceCode: 'B', status: 'A' },
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
          min: { currency: 'CNY', price: 5900 },
          max: { currency: 'CNY', price: 5900 }
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
        collection: { code: 'C446', description: 'Charme', status: 'A' },
        subCollection: { code: 'S0526', description: '可愛系列', status: 'A' },
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
        usage: { description: '串飾', referenceCode: 'C', status: 'A' },
        goldType: {
          description: '999黃金',
          referenceCode: '24GG',
          status: 'A'
        },
        materialCategory: null,
        priceRange: {
          min: { currency: 'HKD', price: 1650 },
          max: { currency: 'NTD', price: 8700 }
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
        collection: { code: 'C446', description: 'Charme', status: 'A' },
        subCollection: { code: 'S0526', description: '可愛系列', status: 'A' },
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
        usage: { description: '串飾', referenceCode: 'C', status: 'A' },
        goldType: {
          description: '999黃金',
          referenceCode: '24GG',
          status: 'A'
        },
        materialCategory: null,
        priceRange: {
          min: { currency: 'HKD', price: 1650 },
          max: { currency: 'NTD', price: 8700 }
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
        brand: { code: 'SR', description: 'Sanrio', status: 'A' },
        collection: { code: 'C508', description: 'Kuromi', status: 'A' },
        subCollection: { code: 'S0600', description: 'Kuromi', status: 'A' },
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
        usage: { description: '串飾', referenceCode: 'C', status: 'A' },
        goldType: {
          description: '999黃金',
          referenceCode: '24GG',
          status: 'A'
        },
        materialCategory: null,
        priceRange: {
          min: { currency: 'HKD', price: 1800 },
          max: { currency: 'HKD', price: 2550 }
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
  })
})

server.use(middlewares)
server.use(jsonServer.rewriter(routes))
server.use(postResponse)
server.use(router)
server.listen(3536, () => {
  console.log('JSON Server is running on http://localhost:3536/')
})
