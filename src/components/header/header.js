import s from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <span>StarWars</span>
                <div className={s.navigation_block}>
                    <div>home</div>
                    <div>characters</div>
                </div>
            </div>
        </div>
    )
}
export default Header;
