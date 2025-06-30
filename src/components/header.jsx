import {RocketLaunch, Rocket} from '@phosphor-icons/react';

import style from './Header.module.css';

export function Header(){
    return(
        <header className={style.header}>
            <div className={style.icone}>
                <RocketLaunch  size={40}/>
            </div>
            <div className={style.titule}>
                <h1>to<span>do</span></h1>
            </div>
        </header>
    );
}