**Example code for the blog post at https://ph-fritsche.github.io/blog/post/react-act**

### Clone the repository and install dependencies
```
git clone https://github.com/ph-fritsche/example-react-act.git
cd example-react-act
yarn
```

### Serve the example
```
yarn start
```

### Run the tests
```
yarn test
```

### Trigger the warning

Edit [src/MyCounter.test.tsx](https://github.com/ph-fritsche/example-react-act/blob/main/src/MyCounter.test.tsx#L15-L18):
```tsx
        vi.spyOn(defaultStore, 'sync')
            .mockImplementationOnce(() => Promise.resolve()
                // Just enough microtasks for this setup.
                // Comment this out to add a warning.
                .then(() => void 0)
                .then(() => void 0)
            )
```