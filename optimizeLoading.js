// 参考 https://thoamsy.vercel.app/solve-fresh-of-loading/
const timeout = ms =>
  new Promise((_, reject) =>
    setTimeout(() => reject(Symbol.for('timeout')), ms)
  )
const rq = (api, ms, reject) => (...args) => {
  const request = api(...args);
  return Promise.race([request, timeout(ms)]).catch(err => {
    // 判断是否是超时触发的reject
    if (Symbol.for('timeout') === err) {
      reject(err);
      return request;
    }
    throw err;
  })
}
