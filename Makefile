
watch04:
	cd 04-more-on-functions && tsc --watch
watch03:
	cd 03-narrowing && tsc --watch

lint:
	tslint -c tslint.json './**/*.ts'