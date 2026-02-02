<h1 align="center">
  ✨ Fundo Mágico
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</p>

<p align="center">
  Gerador de backgrounds com tema medieval/Stardew Valley. Transforme suas ideias em backgrounds incríveis com uma interface temática e interativa.
</p>

---

## 📋 Sobre o Projeto

O **Fundo Mágico** é uma aplicação web desenvolvida durante a Semana do Zero ao Programador Contratado. O projeto combina uma interface inspirada no universo de Stardew Valley com funcionalidades modernas para gerar e visualizar códigos de backgrounds personalizados.

### ✨ Funcionalidades

- 🎨 **Gerador de Backgrounds**: Interface intuitiva para descrever e gerar fundos personalizados
- 📜 **Tema Medieval**: Design com fontes e texturas inspiradas em Stardew Valley
- 🔍 **Efeitos Visuais**: Sistema de desfoque dinâmico ao exibir resultados
- 💻 **Código Gerado**: Visualização automática do HTML/CSS criado
- 📱 **Design Responsivo**: Adaptado para diferentes tamanhos de tela

---

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estruturação semântica da página
- **CSS3**: Estilização avançada com custom properties, gradientes e texturas
- **JavaScript**: Lógica de interação e manipulação do DOM
- **Fontes Personalizadas**: StardewValley-Title e StardewValley-Body

---

## 📁 Estrutura do Projeto

```
szpc-fundo-magico/
├── index.html              # Página principal
├── README.md               # Documentação
└── src/
    ├── css/
    │   ├── estilos.css     # Estilos principais com tema parchment
    │   ├── reset.css       # Reset CSS
    │   └── responsivo.css  # Media queries para responsividade
    ├── fonts/              # StardewValley-Title.ttf, StardewValley-Body.ttf
    ├── images/             # Recursos visuais (bg.jpg, pergaminho.png, etc.)
    └── js/
        └── index.js        # Lógica do formulário e interações
```

---

## 💻 Como Executar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/szpc-fundo-magico.git
   ```

2. **Navegue até o diretório**
   ```bash
   cd szpc-fundo-magico
   ```

3. **Abra o projeto**
   - Abra o arquivo `index.html` em seu navegador preferido
   - Ou utilize uma extensão como Live Server no VS Code

---

## 🎮 Como Usar

1. Digite a descrição do background desejado no campo de texto
   - *Exemplo: "Um gradiente azul suave que vai de azul claro ao azul escuro"*
2. Clique no botão **"GERAR BACKGROUND MÁGICO"**
3. Visualize o resultado e o código HTML/CSS gerado
4. O background da página desfoca automaticamente ao exibir o resultado

---

## 🎨 Recursos Visuais

- **Fontes Personalizadas**
  - `StardewValley-Title`: Utilizada nos títulos e headers
  - `StardewValley-Body`: Aplicada no corpo do texto

- **Texturas e Efeitos**
  - Texturas de pergaminho e madeira
  - Gradientes medievais
  - Sombras gravadas/esculpidas nos textos
  - Sistema de desfoque dinâmico (classe `results-ready`)

---

## 🔧 Implementação Técnica

### Ativação do Efeito de Desfoque

```javascript
// Adiciona efeito de desfoque ao exibir resultado
document.body.classList.add('results-ready');
```

---

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais durante a Semana do Zero ao Programador Contratado.


---

<p align="center">
  Feito com ✨ e muito ☕
</p>
