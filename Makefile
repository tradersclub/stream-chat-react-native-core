sync:
	make delete-branch
	git pull
	git checkout -b aux
	git checkout main
	rm -rf ./target
	mkdir ./target
	cd ./base && yarn install --force && cd ..
	cp -R ./base/node_modules/stream-chat-react-native-core/* ./target
	git merge aux --no-commit --no-ff

delete-branch:
	@if git show-ref --verify --quiet refs/heads/aux; then \
		git branch -D aux; \
	else \
		echo "Branch 'aux' not found."; \
	fi