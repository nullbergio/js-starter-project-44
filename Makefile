install:
	npm ci

lint:
	npx eslint .

publish:
	npm publish --dry-run

brain-games:
	bin/brain-games.js

brain-even:
	bin/brain-even.js
