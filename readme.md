
无法发布到私有包
npm ERR! publish Failed PUT 402
npm ERR! code E402
npm ERR! You must sign up for private packages :
这个当你的包名为@your-name/your-package时才会出现，原因是当包名以@your-name开头时，npm publish会默认发布为私有包，但是 npm 的私有包需要付费，所以需要添加如下参数进行发布:

npm publish --access public

##使用
mac-cli a / text.txt
test
mac-cli a ~/Desktop/ text.txt
