const helloWorld = require('./index.js');

test('Debe retornar "Hello World!"', () => {
    expect(helloWorld()).toBe("Hello World!");
});
