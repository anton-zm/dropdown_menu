import { ReactNode } from 'react';

export type Location =
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right';

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
