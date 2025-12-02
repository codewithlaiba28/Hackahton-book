/**
 * ComponentTypes - Register custom navbar items
 * This file tells Docusaurus about our custom navbar components
 */

import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import NavbarPersonalization from '../Navbar/NavbarPersonalization';

export default {
    ...ComponentTypes,
    'custom-NavbarPersonalization': NavbarPersonalization,
};
