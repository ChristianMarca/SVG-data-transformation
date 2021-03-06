# SVG-data-transformation
POC of SVG data sender through a JSON file

Process BE should generate an SVG string and compress it using the tool provided by the BE

```
funcion compress(value: string): string;
```

and then FE should decompress the string by using the same tool that the BE

```
funcion decompress(value: string): string;
```

in this way the FE will be able to parse the string SVG into a UI component

Results

SVG compressed string

| Variable  | size(bytes)  |
|---|---|
| Original string  | 960  |
| compressed  | 829  |
| decompressed  | 960  |

Decompressed string result example

```
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><style>.cls-1{fill:none;stroke:#132b3e;stroke-linejoin:round;stroke-width:1.5px}</style></defs><path class="cls-1" d="m43 19 .01 20.95 10.67-6.17 10.68 6.17v-7.94L43 19z"/><path style="stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;fill:none;stroke:#132b3e" d="M21.65 31.18V81h10.68V46.11l10.68-6.16L43 19 21.65 31.18z"/><path d="M50.12 39.94V81H35.89V48.17zM46 58.8l2-1.15v-3l-2 1.15zm0-5.51 2-1.16v-3l-2 1.16zm0-5.52 2-1.15v-3l-2 1.18zM42 61.1l2-1.1v-3l-2 1.15zm0-5.51 2-1.16v-3l-2 1.16zm0-5.52 2-1.16V46l-2 1.1zM38 63.4l2-1.15v-3l-2 1.15zm0-5.52 2-1.15v-3l-2 1.16zm0-5.51 2-1.16v-3l-2 1.19z" style="stroke-miterlimit:10;fill:none;stroke:#132b3e"/><path class="cls-1" d="M66.01 50.52V81h12.34V57.64l-12.34-7.12zM53.68 57.64V81h12.33V50.52l-12.33 7.12z"/><path class="cls-1" d="m66.02 47.05-8.78 5.07V38.95l14.24 8.22v4.03l-5.46-4.15z"/></svg>
```

Base64

| Variable  | size(bytes)  |
|---|---|
| Original string  | 960  |
| encoded  | 1306  |
| decompressed  | None  |

Stringified string result example

[binary file](./test.svg)

JSON

| Variable  | size(bytes)  |
|---|---|
| Original string  | 960  |
| parsed  | 2251  |
| stringified  | 960  |

Stringified string result example

```
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><style>.cls-1{fill:none;stroke:#132b3e;stroke-linejoin:round;stroke-width:1.5px}</style></defs><path class="cls-1" d="m43 19 .01 20.95 10.67-6.17 10.68 6.17v-7.94L43 19z"/><path style="stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;fill:none;stroke:#132b3e" d="M21.65 31.18V81h10.68V46.11l10.68-6.16L43 19 21.65 31.18z"/><path d="M50.12 39.94V81H35.89V48.17zM46 58.8l2-1.15v-3l-2 1.15zm0-5.51 2-1.16v-3l-2 1.16zm0-5.52 2-1.15v-3l-2 1.18zM42 61.1l2-1.1v-3l-2 1.15zm0-5.51 2-1.16v-3l-2 1.16zm0-5.52 2-1.16V46l-2 1.1zM38 63.4l2-1.15v-3l-2 1.15zm0-5.52 2-1.15v-3l-2 1.16zm0-5.51 2-1.16v-3l-2 1.19z" style="stroke-miterlimit:10;fill:none;stroke:#132b3e"/><path class="cls-1" d="M66.01 50.52V81h12.34V57.64l-12.34-7.12zM53.68 57.64V81h12.33V50.52l-12.33 7.12z"/><path class="cls-1" d="m66.02 47.05-8.78 5.07V38.95l14.24 8.22v4.03l-5.46-4.15z"/></svg>
```

Example [code](./index.js)
