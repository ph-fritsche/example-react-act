import React, { useEffect, useState } from 'react';
import { defaultStore } from './store';

export function MyCounter() {
    const [count, setCount] = useState<undefined|number>();

    useEffect(() => defaultStore.onValue(setCount), []);

    return (
        <div>
            Current count: <output>{count ?? 'loading...'}</output>
            <button onClick={() => defaultStore.increase()}>Increase</button>
        </div>
    );
}
