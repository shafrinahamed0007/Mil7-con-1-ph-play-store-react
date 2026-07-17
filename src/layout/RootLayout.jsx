
import { Outlet } from 'react-router';
import Navbar from '../compoenents/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
           <Navbar />
            {/* Dynamic */}
            <Outlet />
            <h2>Footer</h2>
            {/* Toast containeref */}
            <ToastContainer />
        </div>
    );
};

export default RootLayout;