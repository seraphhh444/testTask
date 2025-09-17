"use client"

import {useEffect, useState} from 'react';
import {useMediaQuery} from "react-responsive";

const UseMobile = () => {
    const [isClient, setIsClient] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 768 });

    useEffect(() => {
        setIsClient(true);
    }, []);

    return [isMobile, isClient];
};

export default UseMobile;