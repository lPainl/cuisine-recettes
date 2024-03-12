import { Link, useRouteError } from 'react-router-dom';

const NotFound = () => {
    const error = useRouteError();

    console.log(error);

    return (
        <h1>
            No encontrado
            <Link to="/" />
        </h1>
    );
};

export default NotFound;
