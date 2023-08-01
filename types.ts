import { ReactNode } from 'react';

export enum Location {
    TOP_LEFT = 'top-left',
    TOP_RIGHT = 'top-right',
    BOTTON_LEFT = 'bottom-left',
    BOTTON_RIGHT = 'bottom-right'
}
export interface IDropdownOption {
    text: string;
    icon?: ReactNode;
    onClick: () => void;
}

export interface DropdownMenuProps {
    id: string;
    options: IDropdownOption[];
    trigger: string;
}
