import React, {FC} from 'react';
import s from "./Button.module.css"


const Button: FC<React.PropsWithoutRef<JSX.IntrinsicElements["button"]>> = (props) => {
    return (
        <button {...props} className={s.button}/>
    );
};

export default Button;