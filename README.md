MalaPronta TI
=============

Blog sobre tecnologia e afins, de [MalaPronta.com](http://www.malapronta.com.br)

***

## Instalação

> :warning: Certifique se o Ruby e as RubyGems estão corretamente instalados antes de continuar.

1. Clone o repositório: `git clone git@github.com:malapronta/malapronta.github.io.git ti.malapronta.com`
2. Instale a gem bundle: `sudo gem install bundle`
3. Instale as dependências do ruby: `bundle install`

> :warning: Para alterações de front-end precisamos do NodeJS instalado.

1. Instale as dependências globais do NodeJS: `sudo npm i -g gulp browser-sync`
2. Instale as dependências locais do NodeJS: `npm install`
3. Rode o gulp: `gulp` ou `gulp serve`

## Como publicar um artigo

1. Cre uma branch: `git checkout -b myFirstArticle`
2. Rode o build do Jekyll: `jekyll build -w`
3. Crie seu artigo usando rake: `rake post title="Um artigo legal para o Blog da MalaPronta"`
4. Abra e escreve seu artigo no arquivo: `_source/_posts/YYY-MM-DD-slug-do-post.md`
5. Atualize o seu fork com o repositório original. Veja como fazer [nesse link](https://help.github.com/articles/configuring-a-remote-for-a-fork/) e [nesse](https://help.github.com/articles/syncing-a-fork/)
6. Mande um push para sua branch: `git push origin myFirstArticle`
7. Crie um pull request para publicação do artigo: [Creating a pull request](https://help.github.com/articles/creating-a-pull-request/)


***

enjoy! :joy:
