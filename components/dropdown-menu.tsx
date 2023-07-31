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
                <p>{trigger}</p>
                {opened && (
                    <Menu location={location}>
                        {options.map((e, i) => (
                            <div key={i} className="flex gap10">
                                <p onClick={e.onClick} className="">
                                    {e.text}
                                </p>
                                {e.icon}
                            </div>
                        ))}
                    </Menu>
                )}
            </Trigger>
        );
    }
);
const Trigger = styled.div``;

const Menu = styled.div<{ location: Location }>`
    position: absolute;
    top: calc(100% + 5px);
    left: 0;
    width: 260px;
    border-radius: 4px;
    box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.2);
`;
