### Commit usando a palavra-chave `tccommit`

Para garantir que seus commits sejam reconhecidos corretamente, use a palavra-chave `tccommit` na mensagem de commit em tudo que for commitado dentro da pasta target. Veja o exemplo abaixo:

#### Importante: caso você não faça isso, seu commit será perdido na próxima sincronização.

```bash
git commit -m "Algum texto 'tccommit'"
```

#### Processo de sincronização

- No arquivo package.json na pasta ./base altere a versão da lib para a desejada, por exemplo, de 5.38.0 para 5.39.0.
- Rode este comando para gerar o processamento:

```bash
make sync
```

- Conclua manualmente o commit analisando e gerenciando os conflitos.
- Faça o push da nova versão.
- Gere a tag para que o repositório possa criar uma release. Exemplo:

```bash
git tag 1.0.1 && git push origin 1.0.1
```
- Gere uma release neste repo com a tag que acabou de criar. (obs: 1.0.1 é apenas um exemplo)
- No projeto TCApp, atualize a versão da lib stream-chat-react-native-core para o mesmo número de versão que acabou de subir.
