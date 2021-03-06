.DEFAULT_GOAL:=help
.PHONY: help clean

NAME=api
SHORT_NAME=api
PORT=3001

# use syntax below to write an explanatory text for the target and to include printing the target
#: list all targets
help:
	@grep -B1 -E "^[a-zA-Z0-9_-]+\:([^\=]|$$)" Makefile \
     | grep -v -- -- \
     | sed 'N;s/\n/###/' \
     | sed -n 's/^#: \(.*\)###\(.*\):.*/\2###\1/p' \
     | column -t  -s '###'

#: run in dev mode
run: 
	npm run dev

#: run docker container
start: ## Start
	docker run --publish $(PORT):$(PORT) --detach --name $(SHORT_NAME) $(NAME) 

#: build docker container
build: ## Build
	docker build -t $(NAME) .

#: clean docker container
clean: ## Clean
	docker rm --force $(SHORT_NAME)

#: create new tmux session
tmux-session:
	tmux new -s ${NAME}

#: attach to existing tmux session
tmux-attach:
	tmux a -t ${NAME}