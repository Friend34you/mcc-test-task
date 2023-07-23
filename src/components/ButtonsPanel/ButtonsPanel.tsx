import React, {FC} from 'react';
import Button from "../common/Button/Button";
import s from "./ButtonsPanel.module.css"

interface ButtonsPanelProps {
    add: () => void,
    remove: () => void,
    edit: () => void,
    reset: () => void,
}

const ButtonsPanel: FC<ButtonsPanelProps> = ({reset, edit, remove, add}) => {
    return (
        <div className={s.panel}>
            <Button onClick={add}>Add</Button>
            <Button onClick={remove}>Remove</Button>
            <Button onClick={edit}>Edit</Button>
            <Button onClick={reset}>Reset</Button>
        </div>
    );
};

export default ButtonsPanel;