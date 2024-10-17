sync:
	git pull
	make revert-tc-commits
	make clear
	make update-lib
	make copy-to-target
	make rerevert-tc-commits

clear:
	rm -rf ./target && mkdir ./target

update-lib:
	cd ./base && yarn install --force && cd ..

copy-to-target:
	cp -R ./base/node_modules/stream-chat-react-native-core/* ./target

revert-tc-commits:
	@timestamp=$$(date +%Y%m%d%H); \
	for commit in $$(git log --grep="tccommit" --pretty=format:"%H"); do \
		git revert --no-commit $$commit; \
	done; \
	git commit -m "Revert commits with title: 'tccommit' at $$timestamp"

rerevert-tc-commits:
	@timestamp=$$(date +%Y%m%d%H); \
	for commit in $$(git log --grep="Revert commits with title: 'tccommit' at $$timestamp" --pretty=format:"%H"); do \
		git revert --no-commit $$commit; \
	done; \
	git commit -m "Revert tc commits: at $$timestamp"