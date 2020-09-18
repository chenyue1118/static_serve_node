const express = require('express');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const history = require('connect-history-api-fallback');
const request = require('request');
const cors = require('cors');
const app = express();


// 配置日志
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});
app.use(morgan(':remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms :date[web]', {stream: accessLogStream}));

// 配置静态资源目录
const static_route = process.env.STATIC_ROUTE || './public';
app.use(express.static(static_route));

// 设置跨域
app.use(cors());

// 兼容单页面 history 模式路由
app.use(history());


// 代理微信公众号文章  https://mp.weixin.qq.com/s/buNdWcM3mMA3r-5KbsjasQ
app.use('/s', createProxyMiddleware({
  target: 'https://mp.weixin.qq.com',
  changeOrigin: true,
  ws: true,
  // pathRewrite: {
  //   '^/apis/study/business/api': '/study/business/api'
  // }
}))

// /mp/qrcode?scene=10000004&size=102&__biz=MzI1Njc0Nzg3MA==&mid=2247485360&idx=4&sn=866b5f2440e1249b7e9b92e8fd97afcf&send_time=
app.use('/mp', createProxyMiddleware({
  target: 'https://mp.weixin.qq.com',
  changeOrigin: true,
  ws: true,
  // toProxy: true, // passes the absolute URL as the path (useful for proxying to proxies)
}))


// https://mmbiz.qpic.cn/mmbiz_png/8vlVUy3zicgxcpZslcsGNEUPibSj6wEkAYMC9r6mb93fGLibxArBDc6QDU35nAmE7EaZ5JNccCKT2wBpxV683PgQA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1

// https://mmbiz.qpic.cn/mmbiz_png/8vlVUy3zicgxcpZslcsGNEUPibSj6wEkAYMC9r6mb93fGLibxArBDc6QDU35nAmE7EaZ5JNccCKT2wBpxV683PgQA/640?wx_fmt=png
// app.use('/mmbiz_png', createProxyMiddleware({
//   target: 'https://mmbiz.qpic.cn',
//   changeOrigin: true,
//   ws: true,
//   changeOrigin: true,
//   hostRewrite: 'https://mmbiz.qpic.cn'
//   // agent: {
//   //   servername: 'https://mmbiz.qpic.cn'
//   // }
// }))
app.use('/mmbiz_png', (req, res) => {
  request('http://mmbiz.qpic.cn/mmbiz_png/8vlVUy3zicgxcpZslcsGNEUPibSj6wEkAYMC9r6mb93fGLibxArBDc6QDU35nAmE7EaZ5JNccCKT2wBpxV683PgQA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1').pipe(res)
  // request('https://w.wallhaven.cc/full/2e/wallhaven-2eroxm.jpg').pipe(res)
  // request({
  //   // url: 'https://w.wallhaven.cc/full/2e/wallhaven-2eroxm.jpg',
  //   url: 'http://mmbiz.qpic.cn/mmbiz_png/8vlVUy3zicgxcpZslcsGNEUPibSj6wEkAYMC9r6mb93fGLibxArBDc6QDU35nAmE7EaZ5JNccCKT2wBpxV683PgQA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
  //   headers: {
  //     // "origin": "https://mp.weixin.qq.com",
  //     // "referer": "https://mp.weixin.qq.com/s/buNdWcM3mMA3r-5KbsjasQ",
  //     // "user-agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36"
  //   }
  // }).pipe(res)
})

app.listen(9001, () => {
  console.log('Server at 9001');
})
