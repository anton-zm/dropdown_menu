import { store } from '@/store';
import { DropdownMenuProps, Location } from '@/types';
import { observer } from 'mobx-react';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export const DropdownMenu = observer(
    ({ options, trigger, id }: DropdownMenuProps) => {
        const [opened, setOpened] = useState(false);
        const [location, setLocation] = useState<Location>('top-right');
        const triggerRef = useRef<HTMLDivElement>(null);
        const thisIsActive = store.activeId === id;

        useEffect(() => {
            getLocation();
            window.addEventListener('click', outsideClick);
            window.addEventListener('resize', getLocation);

            return () => {
                window.removeEventListener('click', outsideClick);
                window.removeEventListener('resize', getLocation);
            };
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        useEffect(() => {
            if (!thisIsActive) {
                setOpened(false);
            }
        }, [thisIsActive]);

        const outsideClick = (event: MouseEvent) => {
            if (!(event.target as Element)!.classList.contains('xxx')) {
                setOpened(false);
            }
        };

        const getLocation = () => {
            const newLocation = calculateLocation(triggerRef.current!);
            setLocation(newLocation);
        };

        const calculateLocation = (triggerElement: HTMLElement): Location => {
            const triggerRect = triggerElement.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const windowWidth = window.innerWidth;

            const spaceTop = triggerRect.top;
            const spaceBottom = windowHeight - triggerRect.bottom;
            const spaceLeft = triggerRect.left;
            const spaceRight = windowWidth - triggerRect.right;

            if (spaceRight >= spaceLeft && spaceBottom >= spaceTop) {
                return 'top-left';
            } else if (spaceLeft >= spaceRight && spaceBottom >= spaceTop) {
                return 'top-right';
            } else if (spaceRight >= spaceLeft && spaceTop >= spaceBottom) {
                return 'bottom-left';
            } else {
                return 'bottom-right';
            }
        };

        const toggleMenu = () => {
            if (thisIsActive) {
                setOpened(!opened);
            } else {
                store.setActiveId(id);
                setOpened(true);
            }
        };

        return (
            <Trigger
                className="clickable relative xxx"
                onClick={toggleMenu}
                ref={triggerRef}
            >
                <TriggerText className="xxx">{trigger}</TriggerText>
                {opened && (
                    <Menu location={location} className="xxx">
                        {options.map((e, i) => (
                            <MenuItem key={i} className="flex between xxx">
                                <p onClick={e.onClick} className="xxx">
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
    top: ${props => {
        if (props.location.startsWith('top')) {
            return 'calc(100% + 10px)';
        } else {
            return 'auto';
        }
    }};
    bottom: ${props => {
        if (props.location.startsWith('bottom')) {
            return 'calc(100% + 10px)';
        } else {
            return 'auto';
        }
    }};
    left: ${props => {
        if (props.location.endsWith('left')) {
            return 0;
        } else {
            return 'auto';
        }
    }};
    right: ${props => {
        if (props.location.endsWith('right')) {
            return 0;
        } else {
            return 'auto';
        }
    }};
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
