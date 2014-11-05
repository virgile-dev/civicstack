ifndef DEBUG
  DEBUG="njs*"
endif

ifndef NODE_ENV
  NODE_ENV="development"
endif

run: node_modules
	@echo "Booting application..."
	@NODE_PATH=. DEBUG=$(DEBUG) node-debug index.js

node_modules:
	@echo "Installing dependencies..."
	@npm install

clean:
	@echo "Removing dependencies, components and built assets."
	@rm -rf components node_modules public
	@echo "Done.\n"

.PHONY: run build clean