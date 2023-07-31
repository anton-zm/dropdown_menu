import { DropdownMenuProps } from '@/types';
import { observer } from 'mobx-react';
import styled from 'styled-components';

export const DropdownMenu = observer(
    ({ options, trigger }: DropdownMenuProps) => {
        return <Wrapper></Wrapper>;
    }
);
const Wrapper = styled.div``;
