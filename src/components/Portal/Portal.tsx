"use client"

import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children?: ReactNode;
    element?: HTMLElement;
}

export const Portal = ({ children, element }: PortalProps) => {
    const [mounted, setMounted] = useState(false);
    const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setMounted(true);
        setPortalElement(element ?? document.body);
    }, [element]);

    if (!mounted || !portalElement) return null;

    return createPortal(children, portalElement);
};
