import { useNavigate, useLocation } from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate();
    const location = useLocation();

    const goBack = () => {
        const pathSegments = location.pathname.split('/').filter(Boolean); // Разбиваем путь на части

        if (pathSegments.length > 1) {
            // Убираем последний сегмент и переходим
            const newPath = `/${pathSegments.slice(0, -1).join('/')}`;
            navigate(newPath);
        } else {
            // Если в пути один сегмент, отправляем на главную
            navigate('/');
        }
    };

    return (
        <button onClick={goBack}>
            Назад
        </button>
    );
}

export default BackButton;
