"use client"

import cls from './Modal.module.scss'
import {ReactNode, useCallback, useEffect} from "react";
import {Portal} from "@/components/Portal/Portal";
import classNames from "classnames";

interface ModalProps {
    children: ReactNode;
    opened: boolean;
    onCancel: (val: boolean) => void;
    settings?: boolean;
}

const Modal = ({children, opened, onCancel, settings}: ModalProps) => {

    const onClose = useCallback(()=>{
        onCancel(false);
    }, [onCancel]);

    const onEsc = useCallback((e: KeyboardEvent) => {
        if(e.key === 'Escape'){
            onClose();
        }
    }, [onClose])

    useEffect(() => {
        document.addEventListener('keydown', onEsc);
        return () => {
            document.removeEventListener('keydown', onEsc);
        }
    }, [onEsc]);

    return (
        <Portal>
            <div className={classNames(cls.Modal, {[cls.opened]: opened, [cls.settings]: settings}) }>
                <div className={cls.overlay} onClick={onClose}>
                    <div onClick={(e) => e.stopPropagation()}
                         className={classNames(cls.content, {[cls.opened]: opened, [cls.settings]: settings})}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;