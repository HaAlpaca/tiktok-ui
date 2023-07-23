import classNames from 'classnames/bind';
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faSignIn } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '~/assets/images';
import {Wrapper as PropperWrapper} from '~/components/Propper' 
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';


const cx = classNames.bind(styles);

function Header() {
  const [searchResult,setSearchResult] = useState([])

  useEffect(() =>{
    setTimeout(() => {
      setSearchResult([]);
    },0)
  },[])
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* logo */}
        <img src={images.logo} alt="TikTok"></img>

        <Tippy
          interactive={true}
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PropperWrapper>
                  <h4 className={cx('search-title')}>
                    Accounts
                  </h4>
                <AccountItem/>
                <AccountItem/>
                <AccountItem/>
                <AccountItem/>
                </PropperWrapper>
              </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search accounts & videos" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <button className={cx('search-btn')}>
              {/* search */}
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        <div className={cx('action')}>
          <Button text>Upload</Button>
          <Button rounded >Log in</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
