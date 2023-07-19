import React from 'react'
import { Mobile } from './screens/Mobile/Mobile';
import { Desktop } from './screens/Desktop/Desktop';
import { useMediaQuery } from '@uidotdev/usehooks';

const App = () => {
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
    if (isSmallDevice) {
        return <Mobile />
    }
    return <Desktop />
}

export default App