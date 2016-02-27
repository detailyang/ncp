all:
	jison nginx.jison -o ncp.js
	node index.js
