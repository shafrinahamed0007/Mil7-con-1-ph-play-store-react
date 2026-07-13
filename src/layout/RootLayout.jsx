
import { Outlet } from 'react-router';
import Navbar from '../compoenents/Navbar/Navbar';

const RootLayout = () => {
    return (
        <div>
           <Navbar />
            {/* Dynamic */}
            <Outlet />
            <h2>Footer</h2>
        </div>
    );
};

export default RootLayout;