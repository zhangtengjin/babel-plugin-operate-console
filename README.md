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
+remove 
```
