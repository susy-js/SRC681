const test = require('tape');
const { parseURL, parseURI } = require('../dist');

test('SRC-831 URIs', (t) => {
    t.deepEqual(parseURI('sophon:0x1234DEADBEEF5678ABCD1234DEADBEEF5678ABCD'), {
        prefix: 'pay',
        payload: '0x1234DEADBEEF5678ABCD1234DEADBEEF5678ABCD'
    }, 'Can parse URI with payload starting with `0x`');

    t.deepEqual(parseURI('sophon:pay-0x1234DEADBEEF5678ABCD1234DEADBEEF5678ABCD'), {
        prefix: 'pay',
        payload: '0x1234DEADBEEF5678ABCD1234DEADBEEF5678ABCD'
    }, 'Can parse URI with payload starting with `0x` and `pay` prefix');

    t.deepEqual(parseURI('sophon:foo-0x1234DEADBEEF5678ABCD1234DEADBEEF5678ABCD'), {
        prefix: 'foo',
        payload: '0x1234DEADBEEF5678ABCD1234DEADBEEF5678ABCD'
    }, 'Can parse URI with payload starting with `0x` and `foo` prefix');

    t.deepEqual(parseURI('sophon:foo-doge-to-the-moon.sof@42'), {
        prefix: 'foo',
        payload: 'doge-to-the-moon.sof@42'
    }, 'Can parse URI with arbitrary payload and `pay` prefix');

    t.end();
});

test('SRC-681 URLs', (t) => {
    t.deepEqual(parseURL('sophon:0x1234DEADBEEF5678ABCD1234DEADBEEF5678ABCD'), {
        prefix: 'pay',
        address: '0x1234DEADBEEF5678ABCD1234DEADBEEF5678ABCD',
        chainId: 1
    }, 'Can parse URL with an address, implied prefix and implied chainId');

    t.deepEqual(parseURL('sophon:0x1234DEADBEEF5678ABCD1234DEADBEEF5678ABCD@42'), {
        prefix: 'pay',
        address: '0x1234DEADBEEF5678ABCD1234DEADBEEF5678ABCD',
        chainId: 42
    }, 'Can parse URL with an address, implied prefix and specified chainId');

    t.deepEqual(parseURL('sophon:pay-0x1234DEADBEEF5678ABCD1234DEADBEEF5678ABCD@42'), {
        prefix: 'pay',
        address: '0x1234DEADBEEF5678ABCD1234DEADBEEF5678ABCD',
        chainId: 42
    }, 'Can parse URL with an address, specified prefix and specified chainId');


    t.deepEqual(parseURL('sophon:pay-doge-to-the-moon.sof@42'), {
        prefix: 'pay',
        address: 'doge-to-the-moon.sof',
        chainId: 42
    }, 'Can parse URL with an ENS address, specified prefix and specified chainId');

    t.end();
});
