export class CountStore {
    protected value = 123
    protected subscribers = new Set<(count: number) => void>()

    /** Wait to simulate latency */
    sync() {
        return new Promise((r) => setTimeout(r, 1))
    }
    /** Notify subscribers */
    dispatch() {
        this.subscribers.forEach(s => s(this.value))
    }
    /** Sync with backend and notify subscribers */
    async syncAndDispatch() {
        await this.sync()
        this.dispatch()
    }
    /** Subscribe to value changes. Returns unsubscribe callback. */
    onValue(callback: (count: number) => void) {
        this.subscribers.add(callback)
        void this.syncAndDispatch()
        return () => void this.subscribers.delete(callback)
    }
    /** Increase the value by one */
    increase() {
        this.value++
        return this.syncAndDispatch()
    }
}
export const defaultStore = new CountStore()
