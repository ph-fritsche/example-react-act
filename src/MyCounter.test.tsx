import React from 'react';
import { MyCounter } from './MyCounter';
import { defaultStore } from './store';
import { renderElement, screen, waitFor } from './_testEnv';

test('mounting the component causes the warning, but it is not observed', () => {
    renderElement(<MyCounter />);
    expect(screen.getByRole('status')).toHaveTextContent('loading...');
});

describe('trigger the warning', () => {
    beforeEach(() => {
        vi.spyOn(defaultStore, 'sync')
            .mockImplementationOnce(() => Promise.resolve()
                // Just enough microtasks for this setup.
                // Comment this out to add a warning.
                .then(() => void 0)
                .then(() => void 0)
            )
    })
    test('just mount like before', () => {
        renderElement(<MyCounter/>)
    })
})

test('render and increase counter', async () => {
    const { user } = renderElement(<MyCounter />)
    expect(screen.getByRole('status')).toHaveTextContent('loading...')

    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('123'))

    await user.click(screen.getByRole('button', {name: 'Increase'}))

    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('124'))
})
