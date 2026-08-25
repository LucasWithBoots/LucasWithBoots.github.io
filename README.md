# lucas.dev

Portfólio pessoal. React + TypeScript + Vite, CSS puro, zero dependência de UI.

```bash
npm install
npm run dev
```

## Como editar

Todo o conteúdo do site está em [`src/data.ts`](src/data.ts). Não precisa mexer em
componente nenhum para trocar texto, projeto, tecnologia ou link.

Cada texto tem duas versões:

| chave  | quando aparece                          |
| ------ | --------------------------------------- |
| `meme` | padrão — a versão honesta                |
| `pro`  | com o **modo recrutador** ligado         |

O botão no topo alterna entre as duas e a escolha fica salva no `localStorage`.
`?modo=pro` na URL já abre no modo recrutador — dá pra mandar
`https://lucas.dev/?modo=pro` direto pra um recrutador e `https://lucas.dev`
pros amigos.

**Antes de publicar:** troque `LINKS.linkedin` e `LINKS.github` em `src/data.ts`
pelos seus perfis reais (hoje estão como `SEU-USUARIO`) e confirme o e-mail.

## Navegação

O menu funciona como abas: cada item mostra só a sua seção. A seção ativa fica
na URL (`lucas.dev/#lore`), então dá pra mandar link direto pra uma seção e o
botão voltar do navegador funciona normal.

## Estrutura

```
src/
  data.ts                 todo o conteúdo do site
  index.css               tokens de cor/tipografia + todos os estilos
  App.tsx                 layout de duas colunas
  components/
    TopBar.tsx            marca + botão de modo recrutador
    Hero.tsx              nome, tagline, chips e o quadrinho de status
    Nav.tsx               menu de seções, em formato de abas
    Sections.tsx          trabalho, lore, tecnologias, bugs, contato
    Icons.tsx             todos os desenhos, em SVG inline
```

## Publicar

O site mora em `LucasWithBoots/LucasWithBoots.github.io` e é servido em
https://lucaswithboots.github.io — na raiz, então não precisa de base path.

O workflow em `.github/workflows/deploy.yml` faz build e deploy a cada push na
`main`. No repositório, uma vez só: **Settings → Pages → Source: GitHub
Actions**.

Primeiro envio:

```bash
git init -b main
git add .
git commit -m "primeiro build do portfólio"
git remote add origin https://github.com/LucasWithBoots/LucasWithBoots.github.io.git
git push -u origin main
```

Depois disso, cada `git push` publica sozinho.

### Domínio próprio

Se um dia apontar `lucas.dev` pra cá: criar `public/CNAME` com o domínio dentro
e configurar em Settings → Pages → Custom domain. O `base` continua `/`.

### Servido em subpasta

Só se o site sair de repositório (`usuario.github.io/repo`), aí o build precisa
do caminho: `VITE_BASE=/nome-do-repo/ npm run build`.
