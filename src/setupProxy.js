
import axios from 'axios';

const { createProxyMiddleware } = require('http-proxy-middleware');
const API_URL='https://auth.worksmobile.com/oauth2/v2.0/token';

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://auth.worksmobile.com' ,
      pathRewrite: {
        'https://auth.worksmobile.com': '',
      },
    }),
  );
};

export const getData = async pageCount => {
  try {
    const { data } = await axios.get('/api'+`${API_URL}&perPage=10&currentPage=${pageCount}`);
  } catch (err) {
    console.log(err);
  }
};