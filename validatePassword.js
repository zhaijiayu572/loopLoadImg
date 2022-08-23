/**
 * 密码格式验证
 * @param rule 验证规则（不少于7位）
 * @param pwd 需要验证的值
 * @param callback 回调函数
 */
export const validatePassword = (rule, pwd, callback) => {
  if (pwd.length > 7) {
    if (pwd.replace(/\d/g, '') === '') {
      callback(new Error('密码不能全为数字'))
    }

    if (pwd.replace(/[a-z]/g, '') === '') {
      callback(new Error('密码不能全为小写字母'))
    }

    if (pwd.replace(/[A-Z]/g, '') === '') {
      callback(new Error('密码不能全为大写字母'))
    }
    if (pwd.match(/.*[A-Z]+.*/) && pwd.match(/.*[a-z]+.*/) && pwd.match(/.*[0-z]+.*/) && pwd.match(/.*[!@#$_\-;.\\+]+.*/)) {
      callback()
    } else {
      callback(new Error('密码应包含字母大小写、数字和符号'))
    }
  } else {
    callback(new Error('密码长度不得小于7位'))
  }
}
