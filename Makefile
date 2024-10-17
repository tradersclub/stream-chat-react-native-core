sync:
	rm -rf ./target
	mkdir ./target
	cd ./base && yarn install --force && cd ..
	cp -R ./base/node_modules/stream-chat-react-native-core/* ./target