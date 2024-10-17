sync:
	make delete-branchs
	git pull
	git checkout -b gsupdate
	make revert-tc-commits
	git checkout -b tcreverted
	git revert HEAD~1
	git commit -m "Re-revert last tc: 'tccommit'"
	git checkout main
	rm -rf ./target
	mkdir ./target
	cd ./base && yarn install --force && cd ..
	cp -R ./base/node_modules/stream-chat-react-native-core/* ./target
	git merge gsupdate
	git merge tcreverted --no-commit --no-ff

delete-branchs:
	@if git show-ref --verify --quiet refs/heads/gsupdate; then \
		git branch -D gsupdate; \
	else \
		echo "Branch 'gsupdate' not found."; \
	fi
	@if git show-ref --verify --quiet refs/heads/tcreverted; then \
		git branch -D tcreverted; \
	else \
		echo "Branch 'tcreverted' not found."; \
	fi

revert-tc-commits:
	for commit in $$(git log --grep="tccommit" --pretty=format:"%H"); do \
		git revert --no-commit $$commit; \
	done; \
	git commit -m "Revert commits with title: 'tccommit'"