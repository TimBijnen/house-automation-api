.PHONY: test

run: 
	npm run dev

start:
	npm start

test:
	npm run test

attach:
	tmux a -t api
