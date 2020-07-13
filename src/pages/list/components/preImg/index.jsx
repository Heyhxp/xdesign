import React, { Fragment } from 'react'
import style from './index.less'

const src = 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1594640544&di=601d69b307e9e0d17dd4426af664ffb5&src=http://dik.img.kttpdq.com/pic/44/30438/819e9c525b613168_1366x768.jpg'
const PreImg = () => {
  return (
    <Fragment>
      <div className={style.container}>
        <img src={src} alt='这是张图片' className={style.img} />
      </div>
    </Fragment>
  )
}

export default PreImg