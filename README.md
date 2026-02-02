# Fundo Mágico

Gerador de backgrounds com tema medieval/Stardew Valley.

## Funcionalidades

- Formulário para descrever o fundo desejado
- Interface temática com fontes Stardew Valley e texturas de pergaminho
- Efeito de desfoque e escurecimento do background quando o resultado é exibido
- Exibição de código HTML/CSS gerado

## Estrutura

```
├── index.html              # Página principal
├── src/
│   ├── css/
│   │   ├── estilos.css     # Estilos principais com tema parchment
│   │   ├── reset.css       # Reset CSS
│   │   └── responsivo.css  # Media queries
│   ├── images/             # bg.jpg, bg-title.png, pergaminho.png, wood-texture.jpg
│   ├── fonts/              # StardewValley-Title.ttf, StardewValley-Body.ttf
│   └── js/
│       └── index.js        # Lógica do formulário
```

## Recursos Visuais

- **Fontes personalizadas**: StardewValley-Title (títulos) e StardewValley-Body (corpo)
- **Texturas**: Pergaminho, madeira e gradientes para efeito medieval
- **Efeito de texto**: Sombras gravadas/esculpidas
- **Background dinâmico**: Desfoca e escurece quando resultado aparece (classe `results-ready`)

## Como Usar

1. Abra `index.html` no navegador
2. Digite a descrição do fundo desejado no textarea
3. Clique em "Gerar Fundo Mágico"
4. O background desfoca automaticamente quando o resultado estiver pronto

## Implementação JavaScript

Para ativar o efeito de desfoque do background quando o resultado estiver pronto:

```javascript
document.body.classList.add('results-ready');
```
