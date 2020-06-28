# babel-plugin-operate-console

## Example 
```
let name = 'zhangsan';
console.log('test1');
console.log('test2');

↓ ↓ ↓ ↓ ↓ ↓

<!-- comment -->
let name = 'zhangsan';
// console.log('test1');
// console.log('test2');

or
<!-- remove -->
let name = 'zhangsan';

```

## Usage

```
npm install babel-plugin-operate-console -D
```

Via .babelrc or babel-loader.
+ comment
```
{
    "plugins": [
        "operate-console",
        {
            "types": ['comment']
        }
    ]
}
```

+ remove
```
{
    "plugins": [
        "operate-console",
        {
            "types": ['remove']
        }
    ]
}
```
