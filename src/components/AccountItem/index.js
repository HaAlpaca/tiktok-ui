import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/ae479da368501e8aaa52a3b7803f02b2~c5_100x100.jpeg?x-expires=1689991200&x-signature=cJVqfDvdxhoPS80MtC0Yivb%2BTPQ%3D" alt="LKH" /> 
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>DDDDDD</span>
            </div>
        </div>
     );
}

export default AccountItem;