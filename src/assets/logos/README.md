# Logos dos projetos

Coloque aqui a imagem do projeto ou da empresa. Formatos aceitos: `.svg`,
`.png`, `.jpg`, `.webp` — SVG de preferência, que não perde qualidade.

Depois, em `src/data.ts`, referencie **só o nome do arquivo**:

```ts
logo: { text: "V", variant: "dark", src: "verzel.svg" },
```

O `text` continua obrigatório: ele é o que aparece se o arquivo faltar ou se
você remover o `src` depois.

## Escolhendo o `variant`

O `variant` define o fundo do quadradinho. Como o site é escuro, o que importa
é a cor do logo:

| logo é...              | use                  | fundo que você recebe |
| ---------------------- | -------------------- | --------------------- |
| escuro, ou colorido    | `variant: "dark"`    | claro (osso)          |
| branco ou bem claro    | `variant: "outline"` | escuro, com borda     |
| monocromático simples  | `variant: "accent"`  | azul do site          |

## Logo solto x ícone de app

Por padrão a imagem entra com respiro em volta e sem distorcer (`contain`), que
é o certo pra logo solto ou wordmark em fundo transparente.

Se o arquivo já for um **ícone de app** — com fundo próprio e cantos
arredondados, como o do 2get — use `fit: "cover"`. Aí a imagem preenche o
quadradinho inteiro e o `variant` deixa de importar, porque o fundo é o do
próprio ícone:

```ts
logo: { text: "2get", variant: "dark", src: "2get.webp", fit: "cover" },
```

## Tamanho

O quadradinho tem 52px. Um arquivo de 128px ou um SVG já resolve; imagem muito
grande só pesa o build sem aparecer melhor.
