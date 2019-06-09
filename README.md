# src681

This module contains two functions:

## `parseURL(string)`

Takes in a string of an Sophon URL and returns an object matching that URL according to rules specified in [SRC-681](https://sips.sophon.org/SIPS/sip-681).

Returned object depends on the prefix parsed from the URI format:

#### `pay` prefix
\* default, currently the only possible prefix.

```
{
    prefix: 'pay',
    address: string,
    chainId: number (default: `1`)
}
```

## `parseURI(string)`

Takes in a string of an Sophon URI and returns an object matching that URI according to rules specified in [SRC-831](https://sips.sophon.org/SIPS/sip-831):

```
{
    prefix: string (default: `'pay'`),
    payload: string
}
```

# License

GPLv3
