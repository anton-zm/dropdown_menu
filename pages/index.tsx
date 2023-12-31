import { DropdownMenu } from '@/components/dropdown-menu';
import { IDropdownOption } from '@/types';
import Head from 'next/head';
import styled from 'styled-components';
import TrashIcon from '@/public/trash.svg';
import ShareIcon from '@/public/share.svg';
import EditIcon from '@/public/edit.svg';

export default function Home() {
    const menuOptionsData: Record<string, IDropdownOption[]> = {
        menu: [
            {
                text: 'Поделиться',
                onClick: () => alert('Успех!'),
                icon: <ShareIcon />
            },
            {
                text: 'Удалить',
                onClick: () => confirm('Удалить? Уверен?'),
                icon: <TrashIcon />
            },
            {
                text: 'Редактировать',
                onClick: () => alert('Пошли редактировать куда-то...'),
                icon: <EditIcon />
            }
        ]
    };

    return (
        <>
            <Head>
                <title>Dropdown Menu</title>
                <meta name="description" content="Test component" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Container className="flex-col between">
                    <div className="flex between">
                        <DropdownMenu
                            trigger="Menu 1"
                            id="menu1"
                            options={menuOptionsData.menu}
                        />
                        <DropdownMenu
                            trigger="Menu 2"
                            id="menu2"
                            options={menuOptionsData.menu}
                        />
                    </div>
                    <div className="flex between">
                        <DropdownMenu
                            trigger="Menu 3"
                            id="menu3"
                            options={menuOptionsData.menu}
                        />
                        <DropdownMenu
                            trigger="Menu 4"
                            id="menu4"
                            options={menuOptionsData.menu}
                        />
                    </div>
                </Container>
            </main>
        </>
    );
}

const Container = styled.div`
    height: 100vh;
    padding: 32px;
`;
