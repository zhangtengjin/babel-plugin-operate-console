module.exports = function ({ types: t }) {
    const keyPathVisitor = (node, properties) => {
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
            ExpressionStatement(path, { opts }) {
                // ignore
                // const { object, property } = path.node.expression.callee;
                // if (object.name !== 'console') return;
                // const isIgnore = (opts.ignore || []).find(ele => ele === property.name)
                // if(!isIgnore) path.remove();
                // drop
                const node = path.node;
                const expressionNode = keyPathVisitor(node, ['expression']);
                const isCallExpression = expressionNode.type === 'CallExpression';
                if (isCallExpression) {
                    const objectName = keyPathVisitor(expressionNode, ['callee', 'object', 'name']);
                    const prototypeName = keyPathVisitor(expressionNode, ['callee', 'property', 'name']);
                    if (objectName === 'console' && prototypeName === 'log') {
                        path.remove();
                    }
                }
            }
        },
        post(state) {
            this.cache = {}
        }
    }
}