import React from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Spinner, { SpinnerSize } from '@/components/elements/Spinner';

interface Props {
    visible: boolean;
    fixed?: boolean;
    size?: SpinnerSize;
    backgroundOpacity?: number;
}

const SpinnerOverlay = ({ size, fixed, visible, backgroundOpacity }: Props) => (
    <CSSTransition timeout={150} classNames={'fade'} in={visible} unmountOnExit={true}>
        <div
            className={classNames('pin-t pin-l flex items-center justify-center w-full h-full rounded', {
                absolute: !fixed,
                fixed: fixed,
            })}
            style={{ zIndex: 9999, background: `rgba(0, 0, 0, ${backgroundOpacity || 0.45})` }}
        >
            <Spinner size={size}/>
        </div>
    </CSSTransition>
);

export default SpinnerOverlay;
