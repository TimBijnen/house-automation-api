.PHONY: test

run: 
	npm run dev

start:
	docker run --publish 3001:3001 --detach --name api api

build:
	docker build -t api .

clean:
	docker rm --force api
