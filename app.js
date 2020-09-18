const express = require('express');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const request = require('request');
const app = express();


// 配置日志
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});
app.use(morgan(':remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms :date[web]', {stream: accessLogStream}));

// 配置静态资源目录
const static_route = process.env.STATIC_ROUTE || './public';
app.use(express.static(static_route));

// http://qr.it-wy.cn:81/pay?n=1234567890
app.use('/pay', createProxyMiddleware({
  target: 'http://qr.it-wy.cn:81',
  changeOrigin: true,
  ws: true,
  // pathRewrite: {
  //   '^/apis/study/business/api': '/study/business/api'
  // }
}))


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
  console.log(new Date)
  // request('http://mmbiz.qpic.cn/mmbiz_png/8vlVUy3zicgxcpZslcsGNEUPibSj6wEkAYMC9r6mb93fGLibxArBDc6QDU35nAmE7EaZ5JNccCKT2wBpxV683PgQA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1').pipe(res)
  request('https://w.wallhaven.cc/full/2e/wallhaven-2eroxm.jpg').pipe(res)
})

app.listen(9001, () => {
  console.log('Server at 9001');
})
