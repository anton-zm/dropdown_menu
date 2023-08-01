import { DropdownMenuProps, Location } from '@/types';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export const DropdownMenu = observer(
    ({ options, trigger }: DropdownMenuProps) => {
        const [opened, setOpened] = useState(false);
        const [location, setLocation] = useState<Location>('top-right');

        useEffect(() => {
            //TODO
            setLocation('top-left');
        }, []);

        return (
            <Trigger
                className="clickable relative"
                onClick={() => setOpened(!opened)}
            >
                <TriggerText>{trigger}</TriggerText>
                {opened && (
                    <Menu location={location}>
                        {options.map((e, i) => (
                            <MenuItem key={i} className="flex between">
                                <p onClick={e.onClick} className="">
                                    {e.text}
                                </p>
                                {e.icon}
                            </MenuItem>
                        ))}
                    </Menu>
                )}
            </Trigger>
        );
    }
);
const Trigger = styled.div`
    padding: 12px;
    border-radius: 5px;
    background-color: #454586;
`;

const TriggerText = styled.p`
    color: white;
`;

const Menu = styled.div<{ location: Location }>`
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    width: 260px;
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid #c1bcbc;
    border-radius: 4px;
    box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1000;
`;

const MenuItem = styled.div`
    padding: 12px 24px;
    transition: 0.3s;

    &:hover {
        background-color: #f1f1f1;
    }
`;
