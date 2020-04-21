/**
 * @author 谭冰艳
 * @comments 高精度四则运算
 * @time 2020/3/25 11:35
 * @developer 贵州文兴联科技有限公司
 */
const Decimal = require('decimal.js')
const Operation = {
  /**
   * @author 谭冰艳
   * @comments 加法运算
   * @time 2020/3/25 11:35
   * @modification
   * @param v1
   * @param v2
   */
  add (v1, v2) {
    return new Decimal(v1).add(new Decimal(v2)).toNumber()
  },
  /**
   * @author 谭冰艳
   * @comments 减法运算
   * @time 2020/3/25 11:35
   * @modification
   * @param v1
   * @param v2
   */
  sub (v1, v2) {
    return new Decimal(v1).minus(new Decimal(v2)).toNumber()
  },
  /**
   * @author 谭冰艳
   * @comments 乘法运算
   * @time 2018/7/30 11:38
   * @modification
   * @param v1
   * @param v2
   */
  mul (v1, v2) {
    return new Decimal(v1).mul(new Decimal(v2)).toNumber()
  },
  /**
   * @author 谭冰艳
   * @comments 除法运算
   * @time 2018/7/30 11:38
   * @modification
   * @param v1
   * @param v2
   */
  div (v1, v2) {
    return new Decimal(v1).div(new Decimal(v2)).toNumber()
  },
  /**
   * @author 谭冰艳
   * @comments 计算使用优惠券后的价格
   * @time 2018/7/30 11:38
   * @modification
   * @param price
   * @param ope
   * @param val
   */
  useCoupon (price, ope, val) {
    if (ope === '+') {
      return this.add(price, val)
    } else if (ope === '/') {
      return this.div(price, val)
    } else if (ope === '*') {
      return this.mul(price, val)
    } else {
      return this.sub(price, val)
    }
  }
}

module.exports = Operation
