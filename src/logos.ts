// Resolve os arquivos de src/assets/logos/ em URLs finais.
//
// O Vite processa cada arquivo no build (hash no nome, caminho ajustado ao
// `base`), então em data.ts basta escrever o nome do arquivo — nada de caminho
// absoluto que quebra quando o site muda de endereço.

const files = import.meta.glob('./assets/logos/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const byFileName: Record<string, string> = {}
for (const path in files) {
  const fileName = path.split('/').pop()
  if (fileName) byFileName[fileName] = files[path]
}

/**
 * Devolve a URL do logo, ou `undefined` se o arquivo não existir — nesse caso
 * o card volta pras letras sozinho, em vez de mostrar imagem quebrada.
 */
export function logoUrl(src?: string): string | undefined {
  if (!src) return undefined

  const url = byFileName[src]
  if (!url && import.meta.env.DEV) {
    const disponiveis = Object.keys(byFileName).join(', ') || '(pasta vazia)'
    console.warn(
      `[logos] "${src}" não está em src/assets/logos/. Encontrados: ${disponiveis}`,
    )
  }

  return url
}
