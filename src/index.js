module.exports = function ({ types: t }) {
    const getKeyPath = (node, properties) => {
        let temp = node
        for (let item of properties) {
            if (temp[item])
                temp = temp[item]
            else {
                temp = null
                break
            }
        }
        return temp
    }
    return {
        pre(state) {
            this.cache = {};
        },
        visitor: {
            ExpressionStatement: {
                enter (path, { opts }) {
                    const { types } = opts;
                    if (Array.isArray(types) && types.length > 0) {
                        const node = path.node;
                        const expressionNode = getKeyPath(node, ['expression']);
                        const isCallExpression = expressionNode.type === 'CallExpression';
                        if (isCallExpression) {
                            const objectName = getKeyPath(expressionNode, ['callee', 'object', 'name']);
                            const prototypeName = getKeyPath(expressionNode, ['callee', 'property', 'name']);
                            if (objectName === 'console' && prototypeName === 'log') {
                                if (types.indexOf('comment') > -1) {
                                    path.node['expression']['callee']['object']['name'] = `// ${objectName}`
                                } else if (types.indexOf('remove') > -1) {
                                    path.remove();
                                }
                            }
                        }
                    }
                },
                exit () {
                    console.log('exit')   
                }
            }
        },
        post(state) {
            this.cache = {}
        }
    }
}