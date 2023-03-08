import s from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <span>StarWars</span>
                <NavLink to='/'>
                    {({ isActive}) => (
                        <div className={isActive ? `${s.active} ${s.item}` : s.item }>Home</div>
                    )}
                </NavLink>
                <NavLink to='characters'>
                    {({ isActive}) => (
                        <div className={ isActive ? `${s.active} ${s.item}` : s.item }>Characters</div>
                    )}
                </NavLink>
            </div>
        </div>
    )
}
export default Header;
