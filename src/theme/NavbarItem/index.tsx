import React from 'react';
import NavbarPersonalization from '@site/src/components/NavbarItems/NavbarPersonalization';

export default function NavbarItem(props: any) {
    if (props.type === 'custom-NavbarPersonalization') {
        return <NavbarPersonalization {...props} />;
    }
    return null;
}
