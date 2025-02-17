import BackButton from './BackButton'; // Импорт кнопки назад
import { useLocation } from 'react-router-dom';

function Header({headerText}) {
    const location = useLocation();

    return (
        <div className="header">
            {location.pathname !== "/orders" && <BackButton />}
            <h1>{headerText}</h1>
        </div>
    );
}
export default Header;
