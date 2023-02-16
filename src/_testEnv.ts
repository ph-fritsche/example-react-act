import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

export function renderElement(
    jsx: React.ReactElement,
    renderOptions?: Parameters<typeof render>[1],
    userOptions?: Parameters<typeof userEvent['setup']>[0],
) {
    return {
        ...render(jsx, renderOptions),
        user: userEvent.setup({ document, ...userOptions }),
    };
}

export { waitFor, screen } from '@testing-library/react';
