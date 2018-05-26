const fs = require('fs')

const videos = [
  {
    id: 'ytVideo-JnMXuWy2t8A',
    videoId: 'JnMXuWy2t8A',
  },
  {
    id: 'ytVideo-MuAhztaKmZ4',
    videoId: 'MuAhztaKmZ4',
  },
  {
    id: 'ytVideo-YoGTu2GkNbc',
    videoId: 'YoGTu2GkNbc',
  },
  {
    id: 'ytVideo-BiserlchfKg',
    videoId: 'BiserlchfKg',
  },
  {
    id: 'ytVideo-9y4zyPCs6aQ',
    videoId: '9y4zyPCs6aQ',
  },
  {
    id: 'ytVideo-cjRO4nCc8xs',
    videoId: 'cjRO4nCc8xs',
  },
  {
    id: 'ytVideo-TkZN5mPMn3E',
    videoId: 'TkZN5mPMn3E',
  },
  {
    id: 'ytVideo-JhCi_jWgAcE',
    videoId: 'JhCi_jWgAcE',
  },
  {
    id: 'ytVideo-tVyiJaCctVM',
    videoId: 'tVyiJaCctVM',
  },
  {
    id: 'ytVideo-9DUI7GSSkUQ',
    videoId: '9DUI7GSSkUQ',
  },
  {
    id: 'ytVideo-2WXUyMJmF2Q',
    videoId: '2WXUyMJmF2Q',
  },
  {
    id: 'ytVideo-5YEYgKze4iI',
    videoId: '5YEYgKze4iI',
  },
  {
    id: 'ytVideo--Kr5gAfSALk',
    videoId: '-Kr5gAfSALk',
  },
  {
    id: 'ytVideo-IIDWL8x3Wsc',
    videoId: 'IIDWL8x3Wsc',
  },
  {
    id: 'ytVideo-YzZ2Jif3Xqk',
    videoId: 'YzZ2Jif3Xqk',
  },
  {
    id: 'ytVideo-CXQT0jS8-HM',
    videoId: 'CXQT0jS8-HM',
  },
  {
    id: 'ytVideo-lX84KTNRIwM',
    videoId: 'lX84KTNRIwM',
  },
  {
    id: 'ytVideo-9J0ozCz6f4Q',
    videoId: '9J0ozCz6f4Q',
  },
  {
    id: 'ytVideo-Yc7J-ei6XpY',
    videoId: 'Yc7J-ei6XpY',
  },
  {
    id: 'ytVideo-vCN7clRYk3Y',
    videoId: 'vCN7clRYk3Y',
  },
  {
    id: 'ytVideo-OUXUXfRgTVc',
    videoId: 'OUXUXfRgTVc',
  },
  {
    id: 'ytVideo-XFdlf9lXKKE',
    videoId: 'XFdlf9lXKKE',
  },
  {
    id: 'ytVideo-goqTecSIt8M',
    videoId: 'goqTecSIt8M',
  },
  {
    id: 'ytVideo-p_p1meAJW10',
    videoId: 'p_p1meAJW10',
  },
  {
    id: 'ytVideo-Hh8fKYWgvrE',
    videoId: 'Hh8fKYWgvrE',
  },
  {
    id: 'ytVideo-MhMWVtV2zWo',
    videoId: 'MhMWVtV2zWo',
  },
  {
    id: 'ytVideo-9BP2kju3zSY',
    videoId: '9BP2kju3zSY',
  },
  {
    id: 'ytVideo-_jttw14T52o',
    videoId: '_jttw14T52o',
  },
  {
    id: 'ytVideo-IvR-vxTYhKQ',
    videoId: 'IvR-vxTYhKQ',
  },
]

videos.forEach(({ videoId }, index) => {
  fs.writeFileSync(
    `./articles/react/${index}.md`,
    `---
videoId: ${videoId}
---
`
  )
})
